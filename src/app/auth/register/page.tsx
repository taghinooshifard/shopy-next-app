"use client";
import RegisterForm from "@/app/forms/auth/register/RegisterForm";
import { useRouter } from "next/navigation";
export default function RegisterPage() {
  const router = useRouter();
  return (
    <>
      <RegisterForm name="Taghi" router={router} />
    </>
  );
}
