"use client";
import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { HiMenuAlt3 } from "react-icons/hi";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { NavigationsProps } from "@/types/navigation.type";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { PiGraduationCapLight } from "react-icons/pi";
import { MdWorkOutline } from "react-icons/md";
import { GoProject } from "react-icons/go";

const navItems: NavigationsProps[] = [
  { name: "Home", href: "/", icon: IoHomeOutline },
  { name: "About", href: "/about", icon: FaUserCircle },
  {
    name: "Education & Courses",
    href: "/education",
    icon: PiGraduationCapLight,
  },
  { name: "Work Experience", href: "/work-experience", icon: MdWorkOutline },
  { name: "Projects", href: "/projects", icon: GoProject },
];

export default function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {" "}
      <div className="min-h-screen sm:hidden sticky top-0 left-0 z-50 isolate">
        <div
          className={`bg-light-bdy dark:bg-dark-bg ${
            isOpen ? "w-72" : "w-16"
          } duration-500 pl-4 min-h-screen relative`}
        >
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(!isOpen)} className="py-3 mr-2 ">
              {isOpen ? (
                <ImCancelCircle
                  size={26}
                  className="cursor-pointer text-dark-bg dark:text-white"
                />
              ) : (
                <HiMenuAlt3 size={26} className="cursor-pointer text-dark-bg dark:text-white" />
              )}
            </button>
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {navItems?.map((menu, i) => (
              <Link
                href={menu.href}
                key={i}
                className={`${pathname === menu.href ? "bg-light-bg dark:bg-dark-bdy" : ""} 
              group flex items-center text-sm gap-3.5 font-medium p-2 dark:hover:bg-dark-bdy/70 hover:bg-light-bg rounded-l-md text-dark-bg dark:text-white`}
              >
                <div>{menu.icon({ size: 20 })}</div>
                <h2
                  style={{ transitionDelay: `${i + 3}00ms` }}
                  className={`whitespace-pre duration-500 ${
                    !isOpen && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu.name}
                </h2>
                <h2
                  className={`${
                    isOpen && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre
              text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2
              group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
