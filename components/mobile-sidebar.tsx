"use client";
import { MenuIcon } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./sidebar";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const MobileSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="">
      <Sheet>
        <SheetTrigger>
          <span className="btn">
            <MenuIcon className="h-5 w-5" />
          </span>
        </SheetTrigger>
        <SheetContent className="bg-white w-[250px] p-0" side={"left"}>
          <section className="flex p-4">
            <nav className="flex flex-col gap-y-4">
              <Link
                href="/"
                className="mb-12 cursor-pointer  gap-2 flex items-center"
              >
                <Image
                  src={"/icons/logo.svg"}
                  width={34}
                  height={34}
                  alt="logo"
                />
                <h1 className="xl:flex font-bold text-3xl">Bankify</h1>
              </Link>

              {sidebarLinks.map((route) => (
                <Link
                  href={route.route}
                  key={route.label}
                  className={cn(
                    "flex items-center px-4   gap-x-2 rounded py-3 hover:bg-blue-300",
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
                  <p
                    className={cn("text-black font-medium ", {
                      "!text-white": pathname === route.route,
                    })}
                  >
                    {route.label}
                  </p>
                </Link>
              ))}
            </nav>
          </section>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
