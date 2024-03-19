import React, { useState } from "react";

function Form() {
  const [weight, setWeight] = useState("");
  const [calories, setCalories] = useState("");
  const [sports, setSports] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    console.log({ weight, calories, sports });
    // Clear form fields after submission
    setWeight("");
    setCalories("");
    setSports(false);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Weight:
          <input
            type="number"
            step="0.01"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <br />
        <label>
          Calories:
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </label>
        <br />
        <label>
          Sports:
          <input
            type="checkbox"
            checked={sports}
            onChange={(e) => setSports(e.target.checked)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
