"use client";
import { useRouter } from "next/navigation";
import useAuth from "../hooks/useAuth";
import { removeLoginCookie } from "../helpers/auth";
import { selectUser, updateUser } from "../store/auth";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "../hooks";

export default function UserPanel() {
  const router = useRouter();
  // const { user } = useAuth();
  // const dispatch = useAppDispatch();
  // dispatch(updateUser(user));
  const user = useSelector(selectUser);
  console.log("useAuth->user:", user);

  // console.log("user", user);
  const logoutHandler = async () => {
    await removeLoginCookie("");
    router.push("/auth/login-phone");
  };
  const gotoAdminHandler = () => {
    router.push("/admin");
  };
  return (
    <div>
      <h1>User Panel</h1>
      <div>{user?.user?.name}</div>
      <div className="flex gap-2 mx-3">
        <button
          className="bg-emerald-400 shadow-lg rounded-md px-5 py-2 hover:bg-indigo-500"
          onClick={logoutHandler}
        >
          logout
        </button>
        <button
          className="bg-emerald-400 shadow-lg rounded-md px-5 py-2 hover:bg-indigo-500"
          onClick={gotoAdminHandler}
        >
          Admin Menu
        </button>
      </div>
    </div>
  );
}
