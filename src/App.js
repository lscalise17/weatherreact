import "./App.css";
import Weather from "./Weather.js";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Chicago" />
        <footer>
          <a
            href="https://github.com/lscalise17/weatherreact"
            target="_blank"
            rel=" noopener noreferrer"
          >
            {" "}
            Open-Sourced on GitHub
          </a>
          {""} by Lauren Akinrinade and{" "}
          <a
            href="https://idyllic-tapioca-275a99.netlify.app/"
            target="_blank"
            rel=" noopener noreferrer"
          >
            {" "}
            Hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
