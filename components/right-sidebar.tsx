import Image from "next/image";
import Link from "next/link";
import React from "react";
import BankCard from "./bank-card";

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">
              {user.firstName[0]}
            </span>
          </div>
          <div className="profile-details">
            <h1 className="profile-name">
              {user.firstName} {user.lastName}
            </h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>
      </section>
      <section className="banks">
        <div className="w-full flex justify-between items-center">
          <h2 className="header-2">My banks</h2>
          <Link href={"/"} className="flex gap-2">
            <Image src={"/icons/plus.svg"} alt="plus" height={20} width={20} />
            <h2 className="text-14 font-semibold text-gray-600">Add Bank</h2>
          </Link>
        </div>
        {banks.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <BankCard showBalance userName="sankar kalla" account={[]} />
            {banks[1] && (
              <div className="absolute right-0 top-8 w-[90%]">
                {" "}
                <BankCard showBalance userName="sankar kalla" account={[]} />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
};

export default RightSidebar;
