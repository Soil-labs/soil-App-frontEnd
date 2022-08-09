import { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { addMemberData, findMember } from "../../redux/slices/memberSlice";

export const Login = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const state = useSelector((state) => state.member);

  useEffect(() => {
    if (session) {
      dispatch(
        addMemberData({
          _id: session?.user.id,
          discordName: session.user.name,
          discordAvatar: session.user.image,
        })
      );
    }
  }, [session]);

  useEffect(() => {
    if(session){
      const params = {
        _id: session.user.id,
      }
      dispatch(findMember(params))
      console.log("isdataAvailable",state.member.isDataAvailable)
    }
  },[session])

  if (session) {
    const { user } = session;
    return (
      <div
        onClick={() => signOut()}
        className="border-[2px] gap-2 bg-soilGreen-10 w-max flex justify-start items-center h-[45px] rounded-full hover:bg-soilGreen-20 cursor-pointer font-Inter font-semibold text-xl"
      >
        <div className="h-full rounded-full overflow-hidden">
          <img
            src={user?.image}
            className="h-full w-full rounded-md"
            alt="userImage"
          />
        </div>
        <span className="mr-3">{user?.name}</span>
      </div>
    );
  }

  return (
    <div
      onClick={() => signIn("discord")}
      className="border-[2px] border-soilGreen-20 w-max flex h-[45px] px-5 justify-center items-center rounded-full hover:bg-green-200 cursor-pointer font-Inter font-semibold text-xl"
    >
      <span>Login</span>
    </div>
  );
};
