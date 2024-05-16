import Navabar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import React from "react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) return redirect("/sign-in");
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="size-full flex flex-col">
        <Navabar />
        {children}
      </div>
    </main>
  );
}
