import { useState, useEffect } from "react";
import { HeartIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteProject } from "../redux/slices/memberSlice";

export default function FavButton({}) {
  const project = useSelector((state) => state.projectInspect);
  const member = useSelector((state) => state.member);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  function isFav() {
    return member.projects.find((proj) => proj.info._id === project._id)
      ?.favorite;
  }
  useEffect(() => {
    setActive(isFav());
  }, [project._id, member.projects]);

  async function handleClick() {
    if (member.loading) return;
    const params = {
      memberID: member._id,
      projectID: project._id,
      favorite: !isFav(),
    };
    dispatch(addFavoriteProject(params));
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
