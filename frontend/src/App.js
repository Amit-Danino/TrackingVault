import Navbar from "./Navbar";
import Home from "./Home";
import Statistics from "./Statistics";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Statistics" element={<Statistics />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
