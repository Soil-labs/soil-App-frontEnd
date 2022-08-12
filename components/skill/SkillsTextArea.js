import { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";

function getActiveToken(input, cursorPosition) {
  const tokenizedQuery = input?.split(/[\s\n]/).reduce((acc, word, index) => {
    const previous = acc[index - 1];
    const start = index === 0 ? index : previous.range[1] + 1;
    const end = start + word.length;

    return acc.concat([{ word, range: [start, end] }]);
  }, []);

  if (cursorPosition === undefined) {
    return undefined;
  }

  const activeToken = tokenizedQuery?.find(
    ({ range }) => range[0] < cursorPosition && range[1] >= cursorPosition
  );

  return activeToken;
}

function SelectedItem({ children }) {
  return (
    <span className="bg-yellow-200 px-1 rounded-md" contentEditable={false}>
      {children}
    </span>
  );
}

export default function SkillsTextArea({ options, setDataCallback, value }) {
  const inputRef = useRef(null);
  const [currValue, setCurrValue] = useState(value.interestRaw || "");
  const [currToken, setCurrToken] = useState("");
  const [query, setQuery] = useState("");
  const [selectedItemsIncludingDeleted, setSelectedItemsIncludingDeleted] =
    useState(
      value.skills.map((skill) => {
        return { _id: skill.skillInfo._id, name: skill.skillInfo.name };
      })
    );
  const [selectedItems, setSelectedItems] = useState([]);
  // const [startSnapshot, setStartSnapshot] = useState("");
  //   const cursorPosition = inputRef.current?.selectionEnd || 0;

  const handleChange = (e) => {
    // setCurrValue(e.target.value);
    // setCurrToken(getActiveToken(e.target.value, cursorPosition));
  };

  const parseSelected = () => {
    const selectedNames = [...inputRef.current.children].map((item) =>
      item.innerText.substring(1)
    );
    const selectedOptions = selectedItemsIncludingDeleted.filter((item) =>
      selectedNames.some((name) => name === item.name)
    );
    console.log(selectedItemsIncludingDeleted, selectedNames, selectedOptions);

    setSelectedItems(selectedOptions);
  };

  useEffect(() => {
    if (currToken?.word && currToken.word[0] === "@") {
      setQuery(currToken.word.substring(1));
    }
  }, [currToken]);

  const handleSelectOption = (option) => {
    const newValue = currValue
      .split("&nbsp;")
      .join(" ")
      .split(" ")
      .map((a) => {
        if (a === currToken.word) {
          setSelectedItemsIncludingDeleted([
            ...selectedItemsIncludingDeleted,
            option,
          ]);
          return renderToString(
            <SelectedItem>{"@" + option.name}</SelectedItem>
          );
        } else {
          return a;
        }
      });
    setCurrValue(newValue.join(" "));
    inputRef.current.innerHTML = newValue.join(" ") + "&nbsp;";
    setCurrToken("");
    setQuery("");
    // inputRef.current.focus();
  };

  useEffect(() => {
    parseSelected();
  }, [currValue]);

  const handleKeyUp = (e) => {
    setCurrValue(inputRef.current.innerHTML);
    setCurrToken(
      getActiveToken(
        document.getSelection().focusNode.data,
        document.getSelection().focusOffset
      )
    );
  };

  useEffect(() => {
    setDataCallback({
      skills: selectedItems,
      interest: inputRef.current.innerText,
      interestRaw: currValue,
    });
  }, [selectedItems, currValue]);

  useEffect(() => {
    inputRef.current.innerHTML = value.interestRaw
      ? value.interestRaw
      : value.skills
          .map((skill) =>
            renderToString(
              <SelectedItem>{"@" + skill.skillInfo.name}</SelectedItem>
            )
          )
          .join(" ") + "&nbsp;";
    parseSelected();
  }, []);

  return (
    <>
      {/* ----- debugging ----- */}
      {/* <p>selected: {JSON.stringify(selectedItems)}</p>
      <p>selectedAll: {JSON.stringify(selectedItemsIncludingDeleted)}</p>
      <p>current value: {currValue}</p>
      <p>current token: {currToken?.word}</p>
      <p>{query}</p>
      vvvv this is an editable {"<p>"} element vvvv */}
      <div className="relative w-full">
        <p
          ref={inputRef}
          contentEditable={true}
          // onChange={handleChange}
          onKeyUp={handleKeyUp}
          className="overflow-hidden shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-xl px-2 py-3"
        ></p>
        {query && (
          <div className="absolute shadow-sm block w-full sm:text-sm border border-gray-300 rounded-xl px-2 py-3 bg-white">
            {options
              .filter(
                (option) =>
                  !selectedItems.some((item) => option.name === item.name)
              )
              .filter((option) =>
                option.name.toLowerCase().includes(query.toLowerCase())
              )
              .map((option, index) => (
                <p
                  key={index}
                  onClick={() => handleSelectOption(option)}
                  className="cursor-pointer"
                >
                  {option.name}
                </p>
              ))}
          </div>
        )}
      </div>
    </>
  );
}
