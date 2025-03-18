import React from "react";
import ToggleTheme from "../gen/toggleTheme";
import Image from "next/image";
import NavBar from "./NavBar";
// import MobileNav from "./MobileNav";

export default function Heading() {
  return (
    <header className="bg-light-bdy dark:bg-dark-bg  sticky top-0 z-50 flex items-center justify-between px-3 md:px-5">
     
      <Image
        src={`/assets/logo/1-removebg-preview.png`}
        alt="iBabs logo"
        width={50}
        height={10}
        className="w-10 h-10 md:w-12 md:h-12"
        priority
      />
      
        <NavBar />

        <div className="">
          <ToggleTheme />
        </div>
     
    </header>
  );
}
