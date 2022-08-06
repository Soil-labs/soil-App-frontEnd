import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import Layout from "../../../components/layout/Layout";
import { Login } from "../../../components/layout/Login";

const Signup = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push(`/member/signup/${session.user.id}`);
    }
  }, [session]);

  return (
    <Layout>
      <div className="w-full bg-green-400 h-20">
        <Login />
      </div>
    </Layout>
  );
};

export default Signup;
