import { data } from "autoprefixer";
import { useMemo, useEffect, useCallback, useRef } from "react";
import { debounce } from "../utils/debounce.js";

export default function Textarea({
  name,
  value = "",
  setDataCallback,
  placeholder = "",
  title = null,
}) {
  const changeHandler = useCallback(
    (e) => setDataCallback({ [name]: e.target.value }),
    [setDataCallback, name]
  );
  const debouncedChangeHandler = useMemo(
    (e) => debounce(changeHandler.bind(e), 300),
    [changeHandler]
  );

  const textareaRef = useRef(null);
  useEffect(() => {
    if (textareaRef.current) textareaRef.current.value = value;
  }, [textareaRef, value]);

  // Stop the invocation of the debounced function after unmounting
  useEffect(() => debouncedChangeHandler.cancel(), [debouncedChangeHandler]);

  return (
    <div>
      <div className="mt-1">
        <p>{title}</p>
        <textarea
          rows={4}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-xl"
          ref={textareaRef}
          placeholder={placeholder}
          onChange={(e) => {
            debouncedChangeHandler(e);
          }}
        />
      </div>
    </div>
  );
}
