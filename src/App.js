import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
const data = [
  {
    projectName: "Green forests of Bahamas",
    description: "Description of Green forests",
  },
  {
    projectName: "Green seagrass of Bahamas",
    description: "Description of Green seagrass",
  },
  {
    projectName: "Reforestation of Brazil",
    description: "Description of Reforestation",
  },
  {
    projectName: "Blue ocean of Atlantico",
    description: "Description of Blue Ocean",
  },
  {
    projectName: "Blue seagrass of Bahamas",
    description: "Description of Blue seagrass",
  },
];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          <div class="wrapper">
            <div class="arrow-steps clearfix">
              <div class="step current">
                <span> Step 1</span>
              </div>
              <div class="step">
                <span>Step 2 some words</span>{" "}
              </div>
              <div class="step">
                <span> Step 3</span>{" "}
              </div>
            </div>
            <div class="nav clearfix">
              <a href="#" class="prev">
                Previous
              </a>
              <a href="#" class="next pull-right">
                Next
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
