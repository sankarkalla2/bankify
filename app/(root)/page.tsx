import HeaderBox from "@/components/Header-box";
import RightSidebar from "@/components/right-sidebar";
import TotalBalanceBox from "@/components/totalBalance-box";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async() => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="flex">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn ? loggedIn.name : "Guest"}
            subtext="Access and manage your payments and transaction efficiently "
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={3000.24}
          />
        </header>
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{}, {}]}/>
    </section>
  );
};

export default Home;
