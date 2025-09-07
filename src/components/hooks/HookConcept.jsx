import { useState } from "react";

const HookConcept = () => {
  const [count, setCount] = useState(0);
  let varCount = 0;
  const handleState = () => {
    setCount(count + 1);
    console.log("state count inside : ", count);
  };
  const handleVar = () => {
    varCount = varCount + 1;
    console.log("var count inside : ", varCount);
  };
  // console.log("state count : ", count);
  // console.log("var count : ", varCount);

  return (
    <div>
      <h2 className="text-2xl font-medium">count state : {count}</h2>
      <h2 className="text-2xl font-medium">count variable : {varCount}</h2>
      <button className="btn btn-success" onClick={handleState}>
        click to update state
      </button>
      <br /> <br />
      <button className="btn btn-error" onClick={handleVar}>
        click to update variable (not possible in react)
      </button>
      <br />
      <br />
    </div>
  );
};

export default HookConcept;
