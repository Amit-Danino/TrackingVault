import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Stats Tracker</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="./Statistics">Statistics</Link>
      </div>
    </nav>
  );
};

export default Navbar;
