"use client";
import { useAppDispatch } from "../hooks";
// import Cookies from "universal-cookie";
import { MAX_AGE, TOKEN_NAME } from "./constants";
const storeLoginCookie = async (token: string) => {
  // const cookie = new Cookies();
  // cookie.set(TOKEN_NAME, token, {
  //   path: "/",
  //   maxAge: MAX_AGE,
  //   sameSite: "lax",
  // });

  console.log("token:", token);

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    console.log(res);
  } catch (error) {
    console.log("Error", error);
  }
};
const removeLoginCookie = async (token: string) => {
  // const cookie = new Cookies();
  // cookie.remove(TOKEN_NAME);
  console.log("token:", token);

  try {
    const res = await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    console.log(res);
  } catch (error) {
    console.log("Error", error);
  }
};
export { storeLoginCookie, removeLoginCookie };
