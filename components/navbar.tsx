import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import MobileSidebar from "./mobile-sidebar";

const Navabar = () => {
  return (
    <nav className="px-4 pt-2 flex items-center justify-between md:hidden">
      <Link href={"/"}>
        <div className="relative size-8 ">
          <Image src={"/icons/logo.svg"} alt="logo" fill />
        </div>
      </Link>
      <MobileSidebar />
    </nav>
  );
};

export default Navabar;
