"use client";
import { useRouter } from "next/navigation";
import useAuth from "../hooks/useAuth";
import { removeLoginCookie } from "../helpers/auth";

export default function UserPanel() {
  const { user } = useAuth();
  const router = useRouter();
  console.log(user);
  const logoutHandler = async () => {
    await removeLoginCookie("");
    await router.push("/auth/login-phone");
  };
  return (
    <div>
      <h1>User Panel</h1>
      <div>{user?.name}</div>
      <button
        className="bg-slate-400 rounded-md px-5 py-2 hover:bg-indigo-500"
        onClick={logoutHandler}
      >
        logout
      </button>
    </div>
  );
}
