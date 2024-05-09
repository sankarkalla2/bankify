import React from "react";
import AnimatedCounter from "./animated-counter";
import DoughtnutChart from "./Doughnut-chart";

const TotalBalanceBox = ({
  totalBanks,
  totalCurrentBalance,
  accounts = [],
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughtnutChart accounts={accounts.length} />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2"> Bank Accounts: {totalBanks}</h2>

        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>
          <p className="total-balance-amount gap-2 text-center">
            <AnimatedCounter amount={totalCurrentBalance} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
