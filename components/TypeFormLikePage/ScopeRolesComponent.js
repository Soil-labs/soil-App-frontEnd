import { useState } from "react";
import {
  ChevronDoubleDownIcon,
  UserIcon,
  PlusSmIcon as PlusSmIconSolid,
} from "@heroicons/react/solid";

function ScopeRolesComponent(props) {
  const [roleList, setRoleList] = useState([
    {
      roleType: "",
      availbitly: "",
      description: "",
      skills: "",
    },
  ]);

  const handleChange = e => {
    const {role,value} = e.target;
    setRoleList({
      ...roleList,
      [role]: value

    })
  }
  

  const ScopeRolesForm = (props) => {
    return (
      <div className="w-[679px] h-[896px] bg-soilGreen-50 bg-opacity-80 rounded-2xl">
        <div className="flex flex-col items-center">
          {/* Title */}
          <div className="w-[590px] h-[70px] bg-white mt-20 text-4xl shadow-md rounded-2xl flex items-center justify-center">
            <p className="">SCOPE YOUR ROLES</p>
          </div>
          <div>
            <div className=" w-96 h-[650px] flex flex-col justify-center items-center space-y-6 ">
            <div className="mt-1 relative rounded-2xl">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <UserIcon
            className="h-[45px] w-[47.21px] text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
            onChange={handleChange
            }
          type="text"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-[303px] h-[60px]
                       pl-16 sm:text-sm border-gray-300  rounded-3xl"
          placeholder="TYPE THE DESIRED ROLE"
          value={roleList.roleType}
          name="role"
        />
      </div>
              <button
                type="button"
                className="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-black bg-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <PlusSmIconSolid className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <button
            onClick={() => {
              props.changePhase(props.phase);
            }}
          >
            <ChevronDoubleDownIcon className="h-10 w-10 text-black mt-10 font-light stroke-1" />
          </button>
        </div>

        <pre>{JSON.stringify(roleList,null,2)}</pre>
      </div>
    );
  };

  return (
    <>
      <div className="grid h-screen place-items-center bg-[url('/background.svg')]  ">
        <ScopeRolesForm {...props} />
      </div>
    </>
  );
}

export default ScopeRolesComponent;
