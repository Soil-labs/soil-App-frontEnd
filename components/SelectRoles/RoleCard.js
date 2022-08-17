import { useCallback } from "react";

export default function RoleCard({
  setRoleCallback,
  role,
  index,
  currentRoleIndex,
  highlighter = false,
}) {
  const setSkillsCallback = useCallback(async (item) => {
    setRoleCallback({ ...role, skills: item });
  }, []);

  return (
    <div
      className={`relative px-3 py-5 mb-3 ${
        currentRoleIndex === index && highlighter
          ? "border-[2px] border-green-500"
          : ""
      } bg-white border border-gray-300 rounded-xl mb-21`}
    >
      {/* <div className="w-[34px] h-[34px] absolute top-4 left-2">
        <img src="/coder.png" className="h-full w-full" alt="" />
      </div> */}

      <p className="ml-3">
        {role?.title && role.title !== "New Role" ? role.title : "New Role"}
      </p>
      {/* <div className="ml-10">
        <input
          placeholder="start typing here"
          className="rounded-full shadow-md text-left pl-3 py-1 w-full"
          onChange={(e) => {
            setRoleCallback({
              ...role,
              title: e.target.value,
            });
          }}
        />
      </div> */}
    </div>
  );
}
