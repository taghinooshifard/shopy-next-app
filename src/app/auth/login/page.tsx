"use client";
import LoginForm from "@/app/forms/auth/login/LoginForm";
import { useCookies } from "react-cookie";
export default function RegisterPage() {
  const [cookies, setCookies] = useCookies(["shopy-token"]);
  return (
    <>
      <LoginForm email="nooshifard@gmail.com" setCookies={setCookies} />
    </>
  );
}
