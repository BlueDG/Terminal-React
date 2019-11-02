import React, { useContext } from "react";
import EquipmentList from "./EquipmentList";
import { EmployeeContext } from "../App";

export default function Employee(props) {
  const { id, name, birth, affiliation, rank, duties, items } = props;
  const { handleEmployeeDelete, handleEmployeeSelect } = useContext(
    EmployeeContext
  );
  return (
    <>
      <div className="employee">
        <div className="employee__header">
          <h3 className="employee__name">{name}</h3>
        </div>
        <div className="employee__row">
          <span className="employee__label">Date of birth: </span>
          <span className="employee__value">{birth}</span>
        </div>
        <div className="employee__row">
          <span className="employee__label">Affiliation: </span>
          <span className="employee__value employee__value-affiliation">
            {affiliation}
          </span>
        </div>
        <div className="employee__row">
          <span className="employee__label">Rank: </span>
          <span className="employee__value">{rank}</span>
        </div>
        <div className="d-flex flex-column employee-duties">
          <span className="employee__label">Duties:</span>
          <div className="employee__value employee__value--indented recipe__duties">
            {duties}
          </div>
        </div>
        <div>
          <span className="employee__label">Items:</span>
          <div className="employee__value employee__value--indented">
            <EquipmentList items={items} />
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-center">
            <button
              className="button employee-btn"
              onClick={() => handleEmployeeSelect(id)}
            >
              Edit
            </button>
            <button
              className="button employee-btn"
              onClick={() => handleEmployeeDelete(id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
