import "./App.css";
import Weather from "./Weather.js";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />
        <footer>
          <a
            href="https://github.com/lscalise17/reactweather"
            target="_blank"
            rel=" noopener noreferrer"
          >
            {" "}
            Open-Sourced on GitHub
          </a>
          {""} by Lauren Akinrinade and{" "}
          <a
            href="https://kaleidoscopic-starlight-582d3f.netlify.app/"
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
