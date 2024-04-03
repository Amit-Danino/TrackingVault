// import Form from "./Form";
import React, { useContext } from "react";
import AuthContext from "./AuthContext";
import { StatForm } from "./StatForm";
import StatsNavBar from "./StatsNavBar";
const Home = () => {
  const { selectedStat } = useContext(AuthContext);
  return (
    <div className="home">
      <StatsNavBar />
      {selectedStat && <StatForm stat={selectedStat} />}
    </div>
  );
};

export default Home;
