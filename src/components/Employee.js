import React from "react";
import EquipmentList from "./EquipmentList";

export default function Employee(props) {
  const { name, birth, affiliation, rank, duties, items } = props;
  return (
    <>
      <div className="employee">
        <div className="employee__header">
          <h3 className="employee__name">{name}</h3>
        </div>
        <div>
          <span>Date of birth: </span>
          <span>{birth}</span>
        </div>
        <div>
          <span>Affiliation: </span>
          <span>{affiliation}</span>
        </div>
        <div>
          <span>Rank: </span>
          <span>{rank}</span>
        </div>
        <div className="d-flex flex-column employee-duties">
          <span>Duties:</span>
          <div>{duties}</div>
        </div>
        <div>
          <span>Items:</span>
          <div>
            <EquipmentList items={items} />
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-center">
            <button className="button employee-btn">Edit</button>
            <button className="button employee-btn">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
