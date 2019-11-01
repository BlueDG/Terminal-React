import React, { useContext } from "react";
import EmployeeItemEdit from "./EmployeeItemEdit";
import { EmployeeContext } from "../App";
import uuidv4 from "uuid/v4";

export default function EmployeeEdit({ employee }) {
  const { handleEmployeeChange, handleEmployeeSelect } = useContext(
    EmployeeContext
  );

  function handleChange(changes) {
    handleEmployeeChange(employee.id, { ...employee, ...changes });
  }

  function handleItemChange(id, item) {
    const newItem = [...employee.items];
    const index = newItem.findIndex(i => i.id === id);
    newItem[index] = item;
    handleChange({ items: newItem });
  }

  function handleItemAdd() {
    const newItem = {
      id: uuidv4(),
      item: "",
      amount: ""
    };
    handleChange({ items: [...employee.items, newItem] });
  }

  function handleItemDelete(id) {
    handleChange({ items: employee.items.filter(i => i.id !== id) });
  }

  return (
    <div className="employee-edit">
      <div className="employee-edit__remov-button-container">
        <button
          className="button employee-edit__remove-button"
          onClick={() => handleEmployeeSelect(undefined)}
        >
          &times;
        </button>
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
          onChange={e => handleChange({ name: e.target.value })}
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
          onChange={e =>
            handleChange({ birth: parseInt(e.target.value) || "" })
          }
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
          onChange={e => handleChange({ affiliation: e.target.value })}
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
          onChange={e => handleChange({ rank: e.target.value })}
        />
        <label htmlFor="duties" className="employee-edit__label">
          Duties:
        </label>
        <textarea
          name="duties"
          id="duties"
          className="employee-edit__input"
          value={employee.duties}
          onChange={e => handleChange({ duties: e.target.value })}
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
            handleItemDelete={handleItemDelete}
          />
        ))}
      </div>
      <div
        className="employee-edit__add-item-btn-container"
        onClick={() => handleItemAdd()}
      >
        <button className="button">Add Item</button>
      </div>
    </div>
  );
}
