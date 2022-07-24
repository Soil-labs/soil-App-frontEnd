import { useState, useEffect } from "react";
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  XIcon,
} from "@heroicons/react/solid";
import DropdownHoursComponent from "../DropdownHoursComponent";
import DropdownPerComponent from "../DropdownPerComponent";
// import ComboBoxSkillsComponent from "../ComboBoxSkillsComponent";
import DropdownTokenComponent from "../DropdownTokenComponent";
import ReactSelectComponent from "../reactSelectComponent";

function RoleComponent(props) {
  //these are the skills that are chosen
  const [skills, setSkills] = useState([]);

  //skills_all are the skills that come from graphQL
  const [skills_all, setSkills_all] = useState([]);

  useEffect(() => {
    let newSkills = props.skills.map((skill, idx) => {
      return {
        ...skill,
        value: skill._id,
        label: skill.name,
      };
    });
    setSkills_all(newSkills);

    console.log("props.skills kp2 = ", props.skills);
    console.log("skills_all = ", skills_all);
  }, [props.skills]);

  const handleChange_onComboBox= (selectedOption) => {
  

    console.log(
      "selectedOption._id + selectedOption.name",
      selectedOption._id,
      selectedOption.name
    );

    let skills_allN = [...skills_all];

    skills_allN.forEach((skill, index) => {
      if (selectedOption._id === skill._id) {
        skills_allN.splice(index, 1);
      }
    });

    setSkills_all(skills_allN);

    addSkill(selectedOption);
  };

  const addSkill = (skill) => {
    let newArr = [...skills];
    newArr.push(skill);
    setSkills(newArr);
  };

  const removeSkill = (key) => {
    console.log("key Miral style= ", key);
    let newArr = [...skills];
    let newArr_AllSkills = [...skills_all];
    newArr_AllSkills.push(newArr[key]);
    setSkills_all(newArr_AllSkills);
    console.log("Skills_all from removeSkill  ", skills_all);
    newArr.splice(key, 1);
    console.log("newArr from removeSkill", newArr);
    setSkills(newArr);
  };

  console.log("props.skills = ", props.skills);
  // const role

  return (
    <>
      <div className="grid h-screen place-items-center bg-[url('/background.svg')]  ">
        <div className="flex items-center space-x-20">
          <div className="w-[679px] h-[896px] bg-soilGreen-50 bg-opacity-80 rounded-2xl">
            <div className="flex flex-col items-center">
              {/* Arrows */}
              <div className="flex justify-between items-center w-[578px] ">
                <button>
                  <ArrowNarrowLeftIcon className="h-[44px]" />
                </button>
                <div>
                  <p>1/6</p>
                </div>
                <button>
                  <ArrowNarrowRightIcon className="h-[44px]" />
                </button>
              </div>
              <div className="flex items-end space-x-14">
                {/* Avatar + Roletype(dynamic) */}
                <div className="flex items-center space-x-4 ">
                  <span className="inline-block overflow-hidden bg-gray-100 rounded-full h-14 w-14">
                    <svg
                      className="w-full h-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  <div className="rounded-2xl bg-white w-[187px] h-[48px] items-center flex justify-center">
                    <p className="text-xl text-center text-gray-500">
                      ROLETYPE
                    </p>
                  </div>
                </div>
              </div>
              {/* Role desciption input field */}
              <div className="w-[590px] mt-20">
                <div>
                  <div className="mt-1">
                    <textarea
                      rows={10}
                      name="comment"
                      // onChange={(e) =>
                      //   props.handleChange(e, props.phase, "notesAndJustification")
                      //}
                      id="comment"
                      className="block w-full border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-2xl"
                      defaultValue={""}
                      placeholder="Role Description .........................................................................................................................................................
                ........................................................................................................................................................................................
                ........................................................................................................................................................................................
                ........................................................................................................................................................................................
                ........................................................................................................................................................................................
                ........................................................................................................................................................................................"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-8 ">
                <div className="w-[297px] h-[171px] bg-white rounded-2xl">
                  <div className="w-full h-full pt-10 pl-5 ">
                    {skills.map((skill, key) => {
                      return (
                        <div
                          key={key}
                          className="justify-center inline-block mb-2 mr-2 space-x-4 text-xs bg-green-600 rounded-full"
                        >
                          <div className="flex items-center justify-between py-1 pl-2 pr-1">
                            <span className="inline-block mr-[3px]">
                              {skill.name}
                            </span>
                            <button
                              className="w-[14px] h-[14px] ml-2"
                              onClick={() => removeSkill(key)}
                            >
                              <XIcon className="w-full h-full " />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="w-[297px] h-[171px] space-y-4 flex flex-col items-center ">
                  {/* Dropdowns for hours per... */}
                  <div className="rounded-2xl bg-white w-[297px] h-[48px] items-center flex justify-center">
                    <p className="text-xl text-center text-gray-500">
                      LIFECYCLE
                    </p>
                  </div>
                  <div className="flex space-x-6">
                    <DropdownHoursComponent />
                    <DropdownPerComponent />
                  </div>

                  <div className="rounded-2xl bg-white w-[297px] h-[48px] items-center flex justify-center">
                    <p className="text-xl text-center text-gray-500"></p>
                  </div>
                </div>
                <div className="w-[297px] h-[171px] bg-white rounded-2xl"></div>
                {/* Salary Range */}
                <div className="w-[297px] h-[171px] bg-white rounded-2xl">
                  <div className="pt-2 pl-4 mt-1 space-y-2">
                    <p className="ml-1">SALARY RANGE</p>
                    <div className="flex items-center space-x-2 ">
                      <div className="w-20 mt-1">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="block w-full h-6 border-gray-300 rounded-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="0,0"
                        />
                      </div>
                      <div>
                        <span>-</span>
                      </div>
                      <div className="w-20 mt-1">
                        <input
                          type="number"
                          name="name"
                          id="name"
                          className="block w-full h-6 text-sm border-gray-300 rounded-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="999,999"
                        />
                      </div>
                      <DropdownTokenComponent />
                    </div>
                  </div>
                  <div className="mt-6 ml-4 space-x-5">
                    <button
                      type="button"
                      className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Hourly
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Milestone
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      On Delivery
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[546px] h-[516px] bg-opacity-80 bg-soilGreen-50 rounded-2xl flex flex-col items-center">
            <ReactSelectComponent
              addSkill={addSkill}
              skills={props.skills}
              handleChange_onComboBox={handleChange_onComboBox}
              skills_all={skills_all}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RoleComponent;
