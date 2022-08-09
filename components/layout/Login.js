import { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { addMemberData } from "../../redux/slices/memberSlice";

export const Login = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("this runss");
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

  if (session) {
    const { user } = session;
    return (
      <div
        onClick={() => signOut()}
        className="border-[2px] gap-2 bg-green-500 w-max flex justify-start items-center h-10 rounded-full hover:bg-green-200 cursor-pointer font-Inter font-bold text-lg"
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
      className="border-[2px] border-green-500 w-max flex h-10 px-5 justify-center items-center rounded-full hover:bg-green-200 cursor-pointer font-Inter font-bold text-lg"
    >
      <span>Login</span>
    </div>
  );
};
