import React from "react";

export default function EmployeeItemEdit(props) {
  const { item, handleItemChange } = props;

  function handleChange(changes) {
    handleItemChange(item.id, { ...item, ...changes });
  }

  return (
    <>
      <input
        type="text"
        className="employee-edit__input"
        value={item.item}
        onInput={e => handleChange({ item: e.target.value })}
      />
      <input
        type="number"
        min="0"
        max="8"
        className="employee-edit__input"
        value={item.amount}
        onInput={e => handleChange({ amount: e.target.value })}
      />
      <button className="button">&times;</button>
    </>
  );
}
