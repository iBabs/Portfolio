"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { NavigationsProps } from "@/types/navigation.type";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { PiGraduationCapLight } from "react-icons/pi";
import { MdWorkOutline } from "react-icons/md";
import { GoProject } from "react-icons/go";
import { motion } from "framer-motion";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";



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

export default function NavBar() {
  const pathname = usePathname();


  return (
    <>
      {/* Mobile Menu Button - Only visible on small screens */}
      {/* <button
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HiMenuAlt3 size={24} />
      </button> */}

      {/* Desktop Navigation */}
      <TooltipProvider>
        <nav className="hidden sm:flex pt-2 rounded-t-lg ">
          {navItems.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={clsx(
                    "px-2 lg:px-3 py-2 relative rounded-t-md flex items-center transition-all",
                    pathname === item.href
                      ? "bg-light-bg dark:bg-dark-bdy text-primary font-semibold"
                      : "hover:bg-gray-200 dark:hover:bg-gray-800"
                  )}
                >
                  {item.icon && (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {React.createElement(item.icon, {
                        size: 20,
                        className: "lg:w-6 lg:h-6",
                      })}
                    </motion.div>
                  )}
                  {pathname === item.href && (
                    <motion.span
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "auto", opacity: 1 }}
                      className="ml-2 overflow-hidden whitespace-nowrap text-sm lg:text-base"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
      </TooltipProvider>

      {/* Mobile Navigation */}

    </>
  );
}
