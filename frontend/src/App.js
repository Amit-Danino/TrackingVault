import Navbar from "./Navbar";
import Home from "./Home";
import Statistics from "./Statistics";
import Register from "./Register";
import Login from "./Login";
import AddStat from "./AddStat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/Statistics" element={<Statistics />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/AddStat" element={<AddStat />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
