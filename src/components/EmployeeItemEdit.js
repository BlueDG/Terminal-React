import React from "react";

export default function EmployeeItemEdit(props) {
  const { item, handleItemChange, handleItemDelete } = props;

  function handleChange(changes) {
    handleItemChange(item.id, { ...item, ...changes });
  }

  return (
    <>
      <input
        type="text"
        className="employee-edit__input"
        value={item.item}
        onChange={e => handleChange({ item: e.target.value })}
      />
      <input
        type="number"
        min="0"
        max="8"
        className="employee-edit__input"
        value={item.amount}
        onChange={e => handleChange({ amount: e.target.value })}
      />
      <button className="button" onClick={() => handleItemDelete(item.id)}>
        &times;
      </button>
    </>
  );
}
