import React, { useContext, useState, useEffect } from "react";
import { getStats } from "./requests/StatsPersist";
import { StatComponent } from "./StatComponent";
import AuthContext from "./AuthContext";
const StatsNavBar = ({ onSelectStat }) => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedStat } = useContext(AuthContext);

  useEffect(() => {
    const fetchStatsData = async () => {
      setLoading(true);
      getStats()
        .then((statsData) => {
          setStats(statsData);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching stats:", error);
          setLoading(false);
        });
    };
    setSelectedStat(null);
    fetchStatsData();
  }, []);

  const handleStatClick = (stat) => {
    setSelectedStat(stat);
  };

  return (
    <div className="stat-nav-bar">
      {!loading && <h2 className="stat-nav-bar-title">Insert data</h2>}
      <div className="stat-squares">
        {stats && stats.length > 0 ? (
          stats.map((stat, index) => (
            <StatComponent
              key={index}
              stat={stat}
              onClick={(stat) => handleStatClick(stat)}
            />
          ))
        ) : (
          <p>
            No available stats. <br />
            Please add from the above tooltip.
          </p>
        )}
      </div>
    </div>
  );
};

export default StatsNavBar;
