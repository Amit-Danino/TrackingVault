import React, { useContext, useState } from "react";
import AuthContext from "./AuthContext";
import { login } from "./requests/UserPersist";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { setLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password, rememberMe };
    console.log("logging in...");
    console.log(rememberMe);
    try {
      const response = await login(data);
      console.log("User logged in successfully:", response);
      localStorage.setItem("token", response.token);
      setLoggedIn(true);
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Incorrect email or password");
    }
  };

  return (
    <div className="login-form-container">
      <h2 className="login-form-header">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <br />
        <label>
          Remember me?
          <br />
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
        </label>
        <br />
        <button type="submit" className="form-button">
          Login
        </button>{" "}
      </form>
    </div>
  );
};

export default Login;
