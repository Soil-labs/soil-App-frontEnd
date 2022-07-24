import { useState, useEffect } from "react";
import {
  ChevronDoubleDownIcon,
  UserIcon,
  PlusSmIcon as PlusSmIconSolid,
} from "@heroicons/react/solid";
import RoleComponent from "./RoleComponent";
import { findSkills } from "../../redux/slices/skillsSlice";
import { useSelector, useDispatch } from "react-redux";

function ScopeRolesComponent(props) {
  const [roleList, setRoleList] = useState([
    {
      _id: "",
      title: "",
      description: "",
      skills: [
        {
          skill: "",
        },
      ],
    },
    {
      _id: "",
      title: "",
      description: "",
      skills: [
        {
          skill: "",
        },
      ],
    },
  ]);

  const skills = useSelector((state) => state.skillsInspect.skillsInfo);

  const dispatch = useDispatch();

  const handleChange = (e, index) => {
    const { value } = e.target;

    const list = [...roleList];

    list[index].title = value;
    setRoleList(list);
  };

  const handleAddInput = () => {
    if (roleList.length < 6) {
      setRoleList([
        ...roleList,
        {
          _id: "",
          title: "",
          description: "",
          skills: [
            {
              skill: "",
            },
          ],
        },
      ]);
    }

    console.log("roleList - handleAddInput = ", roleList);
  };

  useEffect(() => {
    const params = {
      returnMembers: false,
    };

    dispatch(findSkills(params));
  }, []);

  return (
    <>
      <div className="grid h-screen place-items-center bg-[url('/background.svg')]  ">
        {/* <ScopeRolesForm {...props} /> */}
        <div className="w-[679px] h-[896px] bg-soilGreen-50 bg-opacity-80 rounded-2xl">
          <div className="flex flex-col items-center">
            {/* Title */}
            <div className="w-[590px] h-[70px] bg-white mt-20 text-4xl shadow-md rounded-2xl flex items-center justify-center">
              <p className="">SCOPE YOUR ROLES</p>
            </div>

            <div>
              <div className=" w-96 h-[620px] flex flex-col justify-center items-center space-y-6 ">
                {roleList.map((item, i) => {
                  return (
                    <div key={i} className="relative mt-1 rounded-2xl">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <UserIcon
                          className="h-[45px] w-[47.21px] text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        onChange={(e) => handleChange(e, i)}
                        type="text"
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-[303px] h-[60px]
                       pl-16 sm:text-sm border-gray-300  rounded-3xl"
                        placeholder="TYPE THE DESIRED ROLE"
                        value={item.title}
                        name="name"
                      />
                      <div className="hidden">
                        <RoleComponent skills={skills} 
                        roleList={roleList}
                        />
                      </div>
                    </div>
                  );
                })}
                <button
                  type="button"
                  className="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-black bg-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleAddInput}
                >
                  <PlusSmIconSolid className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                props.changePhase(props.phase);
              }}
            >
              <ChevronDoubleDownIcon className="w-10 h-10 mt-10 font-light text-black stroke-1" />
            </button>
          </div>

          {/* <pre>{JSON.stringify(roleList, null, 2)}</pre> */}
        </div>
      </div>
    </>
  );
}

export default ScopeRolesComponent;
