"use client";
import Image from "next/image";
import {
  AdjustmentsHorizontalIcon,
  ArchiveBoxIcon,
  GiftIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
interface Props {
  setDynamicSidebar: Dispatch<SetStateAction<boolean>>;
  dynamicSidebar: boolean;
}
export default function SideBarAdminLayout(props: Props) {
  {
    /* menu list item object  */
  }
  const navigations = [
    {
      href: "/admin",
      name: "Dashboard",
      icon: ArchiveBoxIcon,
    },
    {
      href: "/admin/products",
      name: "Products",
      icon: GiftIcon,
    },
    {
      href: "/admin/users",
      name: "Users",
      icon: UsersIcon,
    },
  ];
  {
    /* state that show active menu initiale with "Dashboard" menu */
  }
  const currentPath = usePathname();
  return (
    <>
      {/* mobile menu buttons */}
      <button
        onClick={() => {
          props.setDynamicSidebar(!props.dynamicSidebar);
        }}
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className={`inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg ${
          props.dynamicSidebar && `hidden`
        } hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
      >
        <span className="sr-only">Open sidebar</span>
        <AdjustmentsHorizontalIcon className="size-6 " />
      </button>
      {/* side bar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 right-0  z-40 w-64 h-screen transition-transform   ${
          props.dynamicSidebar ? `translate-x-0` : `translate-x-64`
        } `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          {/* site logo and close buttons */}
          <div className="flex justify-between ">
            <a
              href="https://roocket.ir/"
              className="flex items-center ps-2.5 mb-5"
            >
              <Image src="/next.svg" width={100} height={24} alt="" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <a
              href="#"
              onClick={() => {
                props.setDynamicSidebar(!props.dynamicSidebar);
              }}
            >
              <XMarkIcon className="size-6 hover:bg-blue-300" />
            </a>
          </div>
          {/** right menu  */}
          <ul className="space-y-2 font-medium">
            {/** navigation list  */}
            {navigations.map((menu) => {
              return (
                <li key={menu.name}>
                  <Link
                    href={menu.href}
                    as={menu.href}
                    className={`flex items-center p-2 text-gray-900 rounded-lg ${
                      menu.href == currentPath && `bg-blue-300`
                    } dark:text-white hover:bg-blue-300 dark:hover:bg-blue-300 group`}
                  >
                    <menu.icon className="size-6" />
                    <span className="ms-3">{menu.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
}
