import React from "react";
import EmployeeItemEdit from "./EmployeeItemEdit";

export default function EmployeeEdit() {
  return (
    <div className="employee-edit">
      <div className="employee-edit__remov-button-container">
        <button className="button employee-edit__remove-button">&times;</button>
      </div>
      <div className="employee-edit__details-grid">
        <label htmlFor="name" className="employee-edit__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="employee-edit__input"
        />
        <label htmlFor="birth" className="employee-edit__label">
          Date of birth
        </label>
        <input
          type="text"
          name="birth"
          id="birth"
          className="employee-edit__input"
        />
        <label htmlFor="affiliation" className="employee-edit__label">
          Affiliation
        </label>
        <input
          type="text"
          name="affiliation"
          id="affiliation"
          className="employee-edit__input"
        />
        <label htmlFor="rank" className="employee-edit__label">
          Rank
        </label>
        <input
          type="text"
          name="rank"
          id="rank"
          className="employee-edit__input"
        />
        <label htmlFor="duties" className="employee-edit__label">
          Duties
        </label>
        <textarea
          name="duties"
          id="duties"
          className="employee-edit__input"
        ></textarea>
      </div>
      <br />
      <label className="employee-edit__label">Items</label>
      <div className="employee-edit__item-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        <EmployeeItemEdit />
        <EmployeeItemEdit />
      </div>
      <div className="employee-edit__add-item-btn-container">
        <button className="button">Add Item</button>
      </div>
    </div>
  );
}
