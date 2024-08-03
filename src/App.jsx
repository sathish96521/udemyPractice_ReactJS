import ReactEssentials from "./components/Header/ReactEssentials";
import TicTacToe from "./components/TicTacToe";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">React Essentials</Link></li>
          <li><Link to="/deepDive">Deep Dive</Link></li>
          {/* <li><Link to="/contact">Contact</Link></li> */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<ReactEssentials />} />
        <Route path="/deepDive" element={<TicTacToe />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
    
  );
}

export default App;
