import React from "react";
import EmployeeItemEdit from "./EmployeeItemEdit";

export default function EmployeeEdit() {
  return (
    <div className="employee-edit">
      <div className="employee-edit__remov-button-container">
        <button className="button employee-edit__remove-button">&times;</button>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="birth">Date of birth</label>
        <input type="text" name="birth" id="birth" />
        <label htmlFor="affiliation">Affiliation</label>
        <input type="text" name="affiliation" id="affiliation" />
        <label htmlFor="rank">Rank</label>
        <input type="text" name="rank" id="rank" />
        <label htmlFor="duties">Duties</label>
        <textarea name="duties" id="duties"></textarea>
      </div>
      <br />
      <label>Items</label>
      <div>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        <EmployeeItemEdit />
        <EmployeeItemEdit />
      </div>
      <div>
        <button className="button">Add Item</button>
      </div>
    </div>
  );
}
