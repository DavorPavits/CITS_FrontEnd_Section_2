import "./App.css";
import React, { useEffect, useState } from "react";

const people = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin",
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchresults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = people.filter((person) =>
      person.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchresults(results);
  }, [searchTerm]);
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-ligh">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        ></input>
        <ul>{searchTerm && searchResults.map((item) => <li>{item}</li>)}</ul>
      </nav>
    </div>
  );
}

export default App;
