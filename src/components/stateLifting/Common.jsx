import Child from "./relation/Child";
import { useState } from "react";
import Parent from "./relation/Parent";

const Common = () => {
  const [text, setText] = useState("");
  const handleProps = (propsText) => {
    setText(propsText);
  };

  return (
    <div className="border-3 border-gray-500 p-5">
      <h1 className="text-2xl font-bold text-cyan-700">This is Common Component</h1>
      <h1>{text}</h1>
      <Child handleProps={handleProps}></Child>
      <Parent text={text}></Parent>
    </div>
  );
};

export default Common;
