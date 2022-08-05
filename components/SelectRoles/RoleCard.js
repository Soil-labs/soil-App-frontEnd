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
      className={`h-max px-5 py-3 gap-2 ${
        currentRoleIndex === index &&
        highlighter === true &&
        "border-[2px] border-green-500"
      } flex justify-center items-center bg-white border border-gray-300 rounded-xl mb-21`}
    >
      <div className="w-14">
        <img src="/coder.png" className="h-full w-full" alt="" />
      </div>

      {/* <p>
        {role.title && role.title !== "New Role"
          ? role.title
          : "start typing here"}
      </p> */}
      <input
        placeholder="start typing here"
        className="rounded-full shadow-md text-left pl-3 py-1"
        onChange={(e) => {
          setRoleCallback({
            ...role,
            title: e.target.value,
          });
        }}
      />
    </div>
  );
}
