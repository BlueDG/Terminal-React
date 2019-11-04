import React from "react";

export default function EmployeeItemEdit(props) {
  const { item, handleItemChange, handleItemDelete } = props;

  function handleChange(changes) {
    handleItemChange(item.id, { ...item, ...changes });
  }

  return (
    <>
      <select
        type="text"
        className="employee-edit__input"
        value={item.item}
        onChange={e => handleChange({ item: e.target.value })}
      >
        <option value="Flares">Flares</option>
        <option value="Motion Detector">Motion Detector</option>
        <option value="Plasma Torch">Plasma Torch</option>
        <option value="Maintenance Jack">Maintenance Jack</option>
        <option value="Noise Maker">Noise Maker</option>
      </select>
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
