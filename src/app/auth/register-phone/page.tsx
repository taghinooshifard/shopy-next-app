"use client";
import RegisterPhoneForm from "@/app/forms/auth/register/RegisterPhoneForm";
import { useRouter } from "next/navigation";
export default function RegisterPage() {
  const router = useRouter();
  return (
    <>
      <RegisterPhoneForm name="Taghi" router={router} />
    </>
  );
}
