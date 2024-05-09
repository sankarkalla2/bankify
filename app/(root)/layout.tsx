import Navabar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loggedIn = { firstName: "sankar", lastName: "kalla" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar />
      <div className="size-full flex flex-col">
        <Navabar />
        {children}
      </div>
    </main>
  );
}
