import { useState } from "react";
import { HeartIcon } from "@heroicons/react/solid";

export default function FavButton({}) {
  const [active, setActive] = useState(false);
  function handleClick() {
    setActive(!active);
  }
  return (
    <button
      className={`w-8 h-8 pt-px rounded-full ${
        active ? "bg-red-200" : "bg-red-100"
      } flex items-center justify-center`}
      onClick={handleClick}
    >
      {!active ? (
        <HeartIcon
          className="h-6 w-6"
          fill="rgb(241 246 247)"
          stroke="rgb(156 163 175)"
          strokeWidth="1"
        />
      ) : (
        <HeartIcon className="h-6 w-6" fill="red" strokeWidth="1" />
      )}
    </button>
  );
}
