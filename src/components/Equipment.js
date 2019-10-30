import React from "react";

export default function Equipment({ item, amount }) {
  return (
    <>
      <span>{item}</span>
      <span>{amount}</span>
    </>
  );
}
