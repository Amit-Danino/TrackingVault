import { Link, useNavigate } from "react-router-dom";
import { loggedInUser } from "./requests/UserPersist";
import React, { useContext, useEffect } from "react";
import AuthContext from "./AuthContext";
const Navbar = () => {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  // const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // const token = localStorage.getItem("token");
    loggedInUser()
      .then(() => {
        setLoggedIn(true);
      })
      .catch((error) => {
        console.error("Error checking login status:", error);
        setLoggedIn(false);
      });
  }, [setLoggedIn]);

  //MADE FOR TESTING THINGS IN THE FRONTEND////
  // const handleTest = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const result = await loggedInUser(token);
  //     console.log(result);
  //     console.log("success handletest");
  //   } catch (error) {
  //     console.log(error);
  //     navigate("Login");
  //   }
  // };
  ////////////////////////////////////////
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("Login");
  };

  return (
    <nav className="navbar">
      <h1>The Stats Tracker</h1>
      <div className="links">
        {loggedIn && <Link to="/">Home</Link>}
        {loggedIn && <Link to="./Statistics">Statistics</Link>}
        {loggedIn && <Link to="./AddStat">Add Stat</Link>}
        {!loggedIn && <Link to="./Register">Register</Link>}
        {!loggedIn && <Link to="./Login">Login</Link>}
        {loggedIn && (
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        )}
      </div>
      {/* <button onClick={handleTest}>Testing</button> */}
      {/* CAN DELETE THE BUTTON ^ */}
    </nav>
  );
};

export default Navbar;
