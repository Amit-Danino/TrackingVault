import React, { useState } from "react";
import { addStats } from "./requests/StatsPersist";
const AddStat = () => {
  const [name, setName] = useState("");
  const [datatype, setDatatype] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    try {
      await addStats({ name, datatype });
      setName("");
      setDatatype("");
    } catch (error) {
      console.log("error adding stat:", error);
    }
  };

  return (
    <div className="add-stat-container">
      <h2>Add Stat</h2>
      <form onSubmit={handleSubmit}>
        <div className="add-stat-form-group">
          <label htmlFor="name">Data Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="add-stat-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="datatype">Data Type:</label>
          <select
            id="datatype"
            value={datatype}
            onChange={(e) => setDatatype(e.target.value)}
            required
            className="add-stat-input"
          >
            <option value="">Select datatype</option>
            <option value="number">Number</option>
            <option value="text">Text</option>
            <option value="checkbox">Checkbox</option>
          </select>
        </div>
        <button type="submit" className="add-stat-button">
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddStat;
