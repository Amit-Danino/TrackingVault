const StatForm = (stat) => {
  const addStats = (e) => {
    //do that
    e.preventDefault();
    
    console.log(stat);
  };

  return (
    <div className="stat-form-container">
      <div className="stat-form">
        <h3 className="stat-form-title">{stat.stat.name}</h3>
        <form className="stat-form-body">
          {stat.stat.datatype === "checkbox" && (
            <input type="checkbox" className="stat-form-checkbox" />
          )}
          {stat.stat.datatype !== "checkbox" && (
            <input type={stat.stat.datatype} className="stat-form-input" />
          )}
          <button type="submit" onClick={addStats} className="stat-form-button">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export { StatForm };
