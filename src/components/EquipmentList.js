import React from "react";
import Equipment from "./Equipment";

export default function EquipmentList({ items }) {
  const equipmentElements = items.map(item => {
    return <Equipment key={item.id} {...item} />;
  });
  return <div className="items-grid">{equipmentElements}</div>;
}
