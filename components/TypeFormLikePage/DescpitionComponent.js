/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProject } from "../../redux/slices/projectSlice";

export default function DescpitionComponent(props) {
  //   const _id = useSelector((state) => state.projectInspect._id);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleChangePhase = () => {
    const params = {
      _id: props._id,
      description: description,
      returnDates: true,
      returnBudget: true,
      returnCollaborationLinks: true,
    };
    dispatch(updateProject(params));
    console.log("params from Descpition child", params);
    props.changePhase(props.phase);
  };
  return (
    <div className=" h-screen w-screen m-auto content-center ">
      <p> The phase is {props.phase}</p>
      <main className="lg:relative lg:flex lg:justify-center  ">
        {/* Secondary image */}
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
            alt=""
          />
        </div>
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left ">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16 ">
            <div>
              <h1 className="  text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl  xl:text-4xl">
                <span className="block xl:inline">{props.fieldTitle}</span>{" "}
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                {props.questions.description}
              </p>
            </div>
            {/* Input Field */}
            <div className="mt-20">
              <div className="mt-1 border-b border-black focus-within:border-indigo-600">
                <input
                  // value={title}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm"
                />
              </div>
              {/* Button */}
              <button
                onClick={() => {
                  handleChangePhase();
                }}
                type="button"
                className=" mt-2 inline-flex mt- items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Next One
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
