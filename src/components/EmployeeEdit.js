import React, { useContext } from "react";
import EmployeeItemEdit from "./EmployeeItemEdit";
import { EmployeeContext } from "../App";

export default function EmployeeEdit({ employee }) {
  const { handleEmployeeChange } = useContext(EmployeeContext);

  function handleChange(changes) {
    handleEmployeeChange(employee.id, { ...employee, ...changes });
  }

  function handleItemChange(id, item) {
    const newItem = [...employee.items];
    const index = newItem.findIndex(i => i.id === id);
    newItem[index] = item;
    handleChange({ items: newItem });
  }

  return (
    <div className="employee-edit">
      <div className="employee-edit__remov-button-container">
        <button className="button employee-edit__remove-button">&times;</button>
      </div>
      <div className="employee-edit__details-grid">
        <label htmlFor="name" className="employee-edit__label">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="employee-edit__input"
          value={employee.name}
          onInput={e => handleChange({ name: e.target.value })}
        />
        <label htmlFor="birth" className="employee-edit__label">
          Date of birth:
        </label>
        <input
          type="number"
          min="2029"
          name="birth"
          id="birth"
          className="employee-edit__input"
          value={employee.birth}
          onInput={e => handleChange({ birth: parseInt(e.target.value) || "" })}
        />
        <label htmlFor="affiliation" className="employee-edit__label">
          Affiliation:
        </label>
        <input
          type="text"
          name="affiliation"
          id="affiliation"
          className="employee-edit__input"
          value={employee.affiliation}
          onInput={e => handleChange({ affiliation: e.target.value })}
        />
        <label htmlFor="rank" className="employee-edit__label">
          Rank:
        </label>
        <input
          type="text"
          name="rank"
          id="rank"
          className="employee-edit__input"
          value={employee.rank}
          onInput={e => handleChange({ rank: e.target.value })}
        />
        <label htmlFor="duties" className="employee-edit__label">
          Duties:
        </label>
        <textarea
          name="duties"
          id="duties"
          className="employee-edit__input"
          value={employee.duties}
          onInput={e => handleChange({ duties: e.target.value })}
        />
      </div>
      <br />
      <label className="employee-edit__label employee-edit__label-items">
        Items:
      </label>
      <div className="employee-edit__item-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {employee.items.map(item => (
          <EmployeeItemEdit
            key={item.id}
            item={item}
            handleItemChange={handleItemChange}
          />
        ))}
      </div>
      <div className="employee-edit__add-item-btn-container">
        <button className="button">Add Item</button>
      </div>
    </div>
  );
}
