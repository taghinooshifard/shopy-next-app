"use client";

import { useRouter } from "next/navigation";
import useAuth from "../hooks/useAuth";

export default function GuestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, error } = useAuth();
  const router = useRouter();

  if (user && !error) router.push("/panel");
  return <main>{children}</main>;
}
