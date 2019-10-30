import React from "react";
import Employee from "./Employee";

export default function EmployeeList({ employees }) {
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
        <button className="button employee-list__add-employee-btn">
          Add Employee
        </button>
      </div>
    </>
  );
}
