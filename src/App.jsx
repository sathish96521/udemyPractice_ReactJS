import { useState } from "react";
import ReactEssentials from "./components/Header/ReactEssentials";
import HeaderCal from "./components/invCal/HeaderCal.jsx";
import UserInput from "./components/invCal/UserInput.jsx";
import TicTacToe from "./components/TicTacToe.jsx";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Results from "./components/invCal/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">React Essentials</Link>
          </li>
          <li>
            <Link to="/deepDive">Deep Dive</Link>
          </li>
          <li>
            <Link to="/InvCal">Invest Calculator</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<ReactEssentials />} />
        <Route path="/deepDive" element={<TicTacToe />} />
        <Route
          path="/InvCal"
          element={
            <>
              <HeaderCal />{" "}
              <UserInput userInput={userInput} onChange={handleChange} />
              {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
              {inputIsValid && <Results  input={userInput} />}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
