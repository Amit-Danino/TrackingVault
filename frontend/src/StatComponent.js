const StatComponent = ({ stat, onClick }) => {
  const handleClick = () => {
    onClick(stat);
  };

  return (
    <div className="stat-navbar-component" onClick={handleClick}>
      {stat.name}
    </div>
  );
};

export { StatComponent };
