"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="hidden md:flex p-4 border border-r">
      <nav className="flex flex-col gap-y-4">
        <Link
          href="/"
          className="mb-12 cursor-pointer  gap-2 flex items-center"
        >
          <Image src={"/icons/logo.svg"} width={34} height={34} alt="logo" />
          <h1 className="hidden xl:flex font-bold text-3xl">Bankify</h1>
        </Link>

        {sidebarLinks.map((route) => (
          <Link
            href={route.route}
            key={route.label}
            className={cn(
              "flex items-center px-4   lg:gap-x-2 rounded py-3 hover:bg-blue-300",
              pathname === route.route && "bg-blue-600 "
            )}
          >
            <div className="relative size-6">
              <Image
                src={route.imgURL}
                alt="icon"
                fill
                className={cn({
                  "invert-0 brightness-[3]": pathname === route.route,
                })}
              />
            </div>
           <p className={cn("text-black font-medium hidden xl:flex", { '!text-white': pathname===route.route})}>{route.label}</p>
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default Sidebar;
