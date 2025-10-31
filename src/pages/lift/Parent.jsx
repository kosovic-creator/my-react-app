
import React, { useState } from "react";
import Child from "./Child";

const ParentPage = () => {
  const [parentState, setParentState] = useState("");

  const handleChildChange = (value) => {
    setParentState(value);
  };

  return (
    <div>
      <h1>Parent State: {parentState}</h1>
      <Child onChange={handleChildChange} />
    </div>
  );
};

export default ParentPage;