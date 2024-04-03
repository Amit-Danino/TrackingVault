import React, { useState } from "react";
import { createUser } from "./requests/UserPersist";
import { useNavigate } from "react-router-dom";
const moment = require("moment");

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    const birthDate = moment
      .utc([year, month - 1, day])
      .startOf("day")
      .format("YYYY-MM-DD");
    console.log(birthDate);
    e.preventDefault();
    const userData = {
      username: username,
      password: password,
      email: email,
      birthDate: birthDate,
      gender: gender,
    };
    createUser(userData)
      .then((data) => {
        console.log("User registered successfully:", data.user);
        navigate("/Login");
      })
      .catch((e) => {
        alert("Username or email already exists");
      });
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  return (
    <div className="register-form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <label className="form-label">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="form-input"
          />
        </label>
        <br />
        <label className="form-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </label>
        <br />
        <label className="form-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </label>
        <br />
        <label className="form-label">
          Birth Date:
          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            required
            className="form-select"
          >
            <option value="">Day</option>
            {days.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            required
            className="form-select"
          >
            <option value="">Month</option>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
            className="form-select"
          >
            <option value="">Year</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label className="form-label">
          Gender:
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            className="form-select"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <button type="submit" className="form-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
