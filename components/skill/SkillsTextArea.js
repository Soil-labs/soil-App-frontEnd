import { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";

function getActiveToken(input, cursorPosition) {
  const tokenizedQuery = input.split(/[\s\n]/).reduce((acc, word, index) => {
    const previous = acc[index - 1];
    const start = index === 0 ? index : previous.range[1] + 1;
    const end = start + word.length;

    return acc.concat([{ word, range: [start, end] }]);
  }, []);

  if (cursorPosition === undefined) {
    return undefined;
  }

  const activeToken = tokenizedQuery.find(
    ({ range }) => range[0] < cursorPosition && range[1] >= cursorPosition
  );

  return activeToken;
}

function SelectedItem({ children }) {
  return (
    <span contentEditable="false" className="bg-yellow-200">
      {children}
    </span>
  );
}

export default function SkillsTextArea({ options }) {
  const inputRef = useRef(null);
  const [currValue, setCurrValue] = useState("");
  const [currToken, setCurrToken] = useState("");
  const [query, setQuery] = useState("");
  const cursorPosition = inputRef.current?.selectionEnd || 0;

  const handleChange = (e) => {
    // setCurrValue(e.target.value);
    // setCurrToken(getActiveToken(e.target.value, cursorPosition));
  };

  useEffect(() => {
    if (currToken?.word && currToken.word[0] === "@") {
      setQuery(currToken.word.substring(1));
    }
  }, [currToken]);

  const handleSelectOption = (option) => {
    const newValue = currValue.split(" ").map((a) => {
      if (a === currToken.word) {
        return renderToString(<SelectedItem>{"@" + option.name}</SelectedItem>);
      } else {
        return a;
      }
    });
    setCurrValue(newValue);
    inputRef.current.innerHTML = newValue.join(" ") + "&nbsp;";
    setCurrToken("");
    setQuery("");
  };

  const handleKeyDown = (e) => {
    console.log(document.getSelection().focusOffset);
    setCurrValue(inputRef.current.innerText);
    setCurrToken(
      getActiveToken(
        inputRef.current.innerText,
        document.getSelection().focusOffset
      )
    );
  };

  return (
    <>
      <p>current value: {currValue}</p>
      <p>current token: {currToken?.word}</p>
      <p>{query}</p>
      vvvv this is a {"<p>"} element vvvv
      <p
        ref={inputRef}
        contentEditable={true}
        // onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></p>
      {query &&
        options
          .filter((option) =>
            option.name.toLowerCase().includes(query.toLowerCase())
          )
          .map((option, index) => (
            <p key={index} onClick={() => handleSelectOption(option)}>
              {option.name}
            </p>
          ))}
    </>
  );
}
