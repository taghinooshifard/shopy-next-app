"use client";
import { useRouter } from "next/navigation";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { error, loading } = useAuth();
  const router = useRouter();

  if (loading) return <h1>loading...</h1>;
  if (error) {
    router.push("/auth/login-phone");
    // return <></>;
  }

  return <main>{children}</main>;
}
