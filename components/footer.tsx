"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { useTransition } from "react";

interface FooterProps {
  name: string;
  email: string;
}
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { logoutSession } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

const Footer = ({ name, email }: FooterProps) => {
  const router = useRouter();
  const [loading, startTranstion] = useTransition();
  const logout = async () => {
    startTranstion(async () => {
      const res = await logoutSession();
      if (res) {
        router.push("sing-in");
      }
    });
  };
  return (
    <div>
      {!name ? (
        <button className="btn btn-primary w-full">
          <Link href={"/sign-in"}>Login</Link>
        </button>
      ) : (
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="hidden xl:flex  items-center gap-x-2 text-sm overflow-hidden">
            <Avatar className="border flex items-center justify-center bg-emerald-500 text-white cursor-pointer">
              {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
              <AvatarFallback className="">{name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-bold">{name}</h3>
              <p className="text-xs">{email}</p>
            </div>
          </div>
          <LogOut onClick={logout} />
        </div>
      )}
    </div>
  );
};

export default Footer;
