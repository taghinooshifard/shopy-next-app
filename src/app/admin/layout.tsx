"use client";
import { useState } from "react";
import SideBarAdminLayout from "./sideBarLayout";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../hooks/useAuth";
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useAuth();
  const [dynamicSidebar, setDynamicSidebar] = useState(true);
  return (
    <main dir="rtl">
      <div>
        <SideBarAdminLayout
          setDynamicSidebar={setDynamicSidebar}
          dynamicSidebar={dynamicSidebar}
        />
        <div className={`p-4 ${dynamicSidebar && `sm:mr-64`}`}>
          {children}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={true}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
          />
        </div>
      </div>
    </main>
  );
}
