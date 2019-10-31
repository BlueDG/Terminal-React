import React, { useContext } from "react";
import Employee from "./Employee";
import { EmployeeContext } from "../App";

export default function EmployeeList({ employees }) {
  const { handleEmployeeAdd } = useContext(EmployeeContext);
  return (
    <>
      <div className="d-flex employee-list">
        <div>
          {employees.map(employee => {
            return <Employee key={employee.id} {...employee} />;
          })}
        </div>
      </div>
      <div className="d-flex employee-list__add-employee-btn-container">
        <button
          onClick={handleEmployeeAdd}
          className="button employee-list__add-employee-btn"
        >
          Add Employee
        </button>
      </div>
    </>
  );
}
