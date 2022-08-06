import { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export const Login = () => {
  const { data: session } = useSession();

  if (session) {
    const { user } = session;
    return (
      <div
        onClick={() => signOut()}
        className="ml-auto border border-gray-200 bg-soilGreen-10 hover:bg-soilGreen-20 rounded-full pl-4 px-6 h-8 inline-flex items-center justify-center cursor-pointer shadow-[0px_2px_14px_rgba(0,74,217,0.09)]"
      >
        <span>{user?.name}</span>
      </div>
    );
  }

  return (
    <div
      onClick={() => signIn("discord")}
      className="ml-auto border border-gray-200 bg-soilGreen-10 hover:bg-soilGreen-20 rounded-full pl-4 px-6 h-8 inline-flex items-center justify-center cursor-pointer shadow-[0px_2px_14px_rgba(0,74,217,0.09)]"
    >
      <span>Login</span>
    </div>
  );
};
