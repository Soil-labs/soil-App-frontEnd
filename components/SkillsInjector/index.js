/* This example requires Tailwind CSS v2.0+ */
import { useState, useContext, useEffect } from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Combobox } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { findSkills } from "../../redux/slices/skillsSlice";
import { XIcon } from "@heroicons/react/outline";
import { SkillPasserContext } from "../../Contexts/SkillPasserContext";

const colors = [
  "#c2f5e9",
  "#d1f7c4",
  "#ffeab6",
  "#fee2d5",
  "#ffdce5",
  "#ffdaf6",
  "#ede2fe",
  "#cfdfff",
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SkillSelector({
  setSkillsCallback,
  showSelected,
  selected,
  setSelected,
  allSkills,
}) {
  const [query, setQuery] = useState("");
  const [select, setSelect] = useState(false);

  const {
    choosenSkills,
    setChoosenSkills,
    highlightedSkill,
    setHighlightedSkill,
  } = useContext(SkillPasserContext);

  useEffect(() => {
    console.log("selected skill", choosenSkills);
  }, [choosenSkills]);

  const dispatch = useDispatch();

  const skills = useSelector(
    (state) =>
      state.skillsInspect.skillsInfo.filter(
        (skill) => skill.state === "approved"
      ) || []
  );

  const skillIsSelected = (skill) => {
    return choosenSkills.some(
      (selectedSkill) => selectedSkill._id === skill._id
    );
  };

  const selectorSkills = skills.filter((skill) => {
    if (skillIsSelected(skill)) return false;
    return !query
      ? true
      : skill.name.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    if (selected === false) {
      setSelect(false);
      setHighlightedSkill(null);
    }
  }, [selected]);

  useEffect(() => {
    dispatch(findSkills({}));
  }, [dispatch]);

  // useEffect(() => {
  //   setSkillsCallback(choosenSkills);
  // }, [choosenSkills, setSkillsCallback]);

  useEffect(() => {
    setHighlightedSkill(highlightedSkill);
  }, [highlightedSkill]);

  const handleSelect = (skill) => {
    setChoosenSkills([...choosenSkills, skill]);
  };

  const handleDeleteClick = (skill) => {
    setChoosenSkills(
      choosenSkills.filter((selected) => selected._id !== skill._id)
    );
  };

  return (
    <div>
      <Combobox as="div" value={choosenSkills} onChange={handleSelect}>
        <Combobox.Label className="block text-sm font-medium text-gray-700">
          Skills
        </Combobox.Label>
        <div className="relative mt-1 mb-4">
          <Combobox.Input
            className="w-full rounded-full border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(skill) => skill?.name}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
            <SelectorIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>

          {selectorSkills.length > 0 && (
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {selectorSkills.map((skill, index) => {
                return (
                  <Combobox.Option
                    key={index}
                    value={skill}
                    className={({ active }) =>
                      classNames(
                        "relative cursor-default select-none py-2 pl-3 pr-9",
                        active ? "bg-indigo-600 text-white" : "text-gray-900"
                      )
                    }
                  >
                    {({ active, selected }) => (
                      <>
                        <span
                          className={classNames(
                            "block truncat",
                            selected && "font-semibold"
                          )}
                        >
                          {skill.name}
                        </span>

                        {selected && (
                          <span
                            className={classNames(
                              "absolute inset-y-0 right-0 flex items-center pr-4",
                              active ? "text-white" : "text-indigo-600"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
                      </>
                    )}
                  </Combobox.Option>
                );
              })}
            </Combobox.Options>
          )}
        </div>
      </Combobox>

      {/* bg colors loader */}
      <div className="hidden bg-[#c2f5e9] bg-[#d1f7c4] bg-[#ffeab6] bg-[#fee2d5] bg-[#ffdce5] bg-[#ffdaf6] bg-[#ede2fe] bg-[#cfdfff]"></div>
      {showSelected && (
        <section>
          {choosenSkills.map((skill, index) => (
            <div
              className={`inline-block mr-2 rounded-full ${
                select === index
                  ? "border-blue-500 border-[2px]"
                  : "border-none"
              } bg-[${colors[index % colors.length]}]`}
              key={index}
            >
              <div className="w-full h-full px-3 flex items-center justify-between">
                <span
                  className={`mr-2 mb-px cursor-pointer`}
                  onClick={() => {
                    setSelect(index);
                    setSelected(true);
                    setHighlightedSkill(skill);
                  }}
                >
                  {skill.name}
                </span>
                <XIcon
                  className="inline-block h-4 w-4 text-slate-600 hover:text-slate-400 cursor-pointer"
                  aria-hidden="true"
                  onClick={() => handleDeleteClick(skill)}
                />
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
