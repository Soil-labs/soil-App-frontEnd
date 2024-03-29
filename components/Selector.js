/* This example requires Tailwind CSS v2.0+ */
import { useCallback, useState } from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Combobox } from "@headlessui/react";
import { useEffect } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Selector({
  name,
  options,
  setDataCallback,
  value,
  placeholder = "",
}) {
  const [query, setQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  const isDataSelected = (item) => {
    return item === selectedItem;
  };

  const selectorData = options?.filter((item) => {
    if (isDataSelected(item)) return false;
    return !query ? true : item.toLowerCase().includes(query.toLowerCase());
  });

  const handleSelect = useCallback(
    (item) => {
      setSelectedItem(item);
      setDataCallback({ [name]: item });
    },
    [setDataCallback, name]
  );

  useEffect(() => {
    if (value != selectedItem) setSelectedItem(value);
  }, [value]);

  return (
    <div>
      <Combobox as="div" value={selectedItem} onChange={handleSelect}>
        <div className="relative mt-1 mb-4">
          <Combobox.Button className="w-full rounded-full border border-gray-300 bg-white shadow-sm sm:text-sm">
            <Combobox.Input
              className="w-full border-none rounded-full py-2 pl-3 pr-10 sm:text-sm bg-transparent focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              onChange={(event) => setQuery(event.target.value)}
              displayValue={(item) => item}
              placeholder={placeholder}
            />
            <div className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
          </Combobox.Button>

          {selectorData.length > 0 && (
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {selectorData.map((item, index) => {
                return (
                  <Combobox.Option
                    key={index}
                    value={item}
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
                          {item}
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
    </div>
  );
}
