"use client";
import { useRouter } from "next/navigation";
import useAuth from "../hooks/useAuth";
export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { error, loading } = useAuth();
  if (loading) return <h1>loading...</h1>;
  if (error) {
    router.push("/auth/login-phone");
    return <></>;
  }

  return <main>{children}</main>;
}
