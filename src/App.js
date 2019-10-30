import React from "react";
import EmployeeList from "./components/EmployeeList";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.css";
import "./css/app.css";

function App() {
  return (
    <>
      <Nav />
      <EmployeeList employees={sampleEmployees} />
    </>
  );
}

const sampleEmployees = [
  {
    id: 1,
    name: "Amanda Ripley",
    birth: "unknown",
    affiliation: "unknown",
    rank: "unknown",
    duties:
      "1. Grab the briefing documents.\n2. Restore power to the shutters.\n3. Contact the Torrens.",
    items: [
      {
        id: 1,
        item: "Motion Detector",
        amount: 1
      },
      {
        id: 2,
        item: "Flare",
        amount: 4
      }
    ]
  },
  {
    id: 2,
    name: "Ellen Ripley",
    birth: "unknown",
    affiliation: "unknown",
    rank: "unknown",
    duties:
      "1. Use the access tuner.\n2. Check the terminal.\n3. Disable the security lockdown.",
    items: [
      {
        id: 1,
        item: "Plasma Torch",
        amount: 1
      },
      {
        id: 2,
        item: "Flamethrower",
        amount: 1
      }
    ]
  }
];

export default App;
