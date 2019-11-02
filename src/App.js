import React, { useState, useEffect } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeEdit from "./components/EmployeeEdit";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.css";
import uuidv4 from "uuid/v4";
import "./css/app.css";

export const EmployeeContext = React.createContext();
const LOCAL_STORAGE_KEY = "terminal.employees";

function App() {
  const [selectedEmployeeId, setSelectedEmployeeId] = useState();
  const [employees, setEmployees] = useState(sampleEmployees);
  const selectedEmployee = employees.find(
    employee => employee.id === selectedEmployeeId
  );

  const employeeContextValue = {
    handleEmployeeAdd,
    handleEmployeeDelete,
    handleEmployeeSelect,
    handleEmployeeChange
  };

  useEffect(() => {
    const employeeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (employeeJSON != null) setEmployees(JSON.parse(employeeJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(employees));
  }, [employees]);

  function handleEmployeeSelect(id) {
    setSelectedEmployeeId(id);
  }

  function handleEmployeeAdd() {
    const newEmployee = {
      id: uuidv4(),
      name: "",
      birth: "",
      affiliation: "",
      rank: "",
      duties: "",
      items: [
        {
          id: uuidv4(),
          item: "",
          amount: ""
        }
      ]
    };

    setEmployees([...employees, newEmployee]);
    setSelectedEmployeeId(newEmployee.id);
  }

  function handleEmployeeDelete(id) {
    if (selectedEmployeeId != null && selectedEmployeeId === id) {
      setSelectedEmployeeId(undefined);
    }
    setEmployees(employees.filter(employee => employee.id !== id));
  }

  function handleEmployeeChange(id, employee) {
    const newEmployee = [...employees];
    const index = newEmployee.findIndex(e => e.id === id);
    newEmployee[index] = employee;
    setEmployees(newEmployee);
  }

  return (
    <>
      <Nav />
      <EmployeeContext.Provider value={employeeContextValue}>
        <EmployeeList employees={employees} />
        {selectedEmployee && <EmployeeEdit employee={selectedEmployee} />}
      </EmployeeContext.Provider>
    </>
  );
}

const sampleEmployees = [
  {
    id: 1,
    name: "Amanda Ripley",
    birth: 2111,
    affiliation: "Weyland-Yutani",
    rank: "Warrant Officer",
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
    birth: 2092,
    affiliation: "Weyland-Yutani",
    rank: "Warrant Officer",
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
