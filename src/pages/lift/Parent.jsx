import React, { useState } from "react";
import Child from "./Child";

const ParentLiftPage = () => {
  // Održavam vrijednost iz Childa u Parentu
  const [broj, setBroj] = useState("");

  const handleBrojChange = (value) => {
    setBroj(value);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Broj iz childa: {broj}</p>
      <Child onChange={handleBrojChange} broj={broj} />
    </div>
  );
};

export default ParentLiftPage;