/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Combobox } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { findSkills } from "../../redux/slices/skillsSlice";

const skills = [
  {
    id: 1,
    name: "Wade Cooper",
  },
  {
    id: 2,
    name: "Arlene Mccoy",
  },
  {
    id: 3,
    name: "Devon Webb",
  },
  {
    id: 4,
    name: "Tom Cook",
  },
  {
    id: 5,
    name: "Tanya Fox",
  },
  {
    id: 6,
    name: "Hellen Schmidt",
  },
  {
    id: 7,
    name: "Caroline Schultz",
  },
  {
    id: 8,
    name: "Mason Heaney",
  },
  {
    id: 9,
    name: "Claudie Smitham",
  },
  {
    id: 10,
    name: "Emil Schaefer",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SkillSelector() {
  const [query, setQuery] = useState("");

  const [selected, setSelected] = useState();
  const skills = useSelector((state) =>
    state.skillsInspect.skillsInfo.filter((skill) => skill.state === "approved")
  );
  const dispatch = useDispatch();

  const filteredSkills =
    query === ""
      ? skills
      : skills.filter((skill) => {
          return skill.name.toLowerCase().includes(query.toLowerCase());
        });

  useEffect(() => {
    dispatch(findSkills({}));
  }, [dispatch]);

  return (
    <Combobox as="div" value={selected} onChange={setSelected}>
      <Combobox.Label className="block text-sm font-medium text-gray-700">
        Assigned to
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(skill) => skill?.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredSkills.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredSkills.map((skill) => (
              <Combobox.Option
                key={skill.id}
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
                        "block truncate",
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
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
