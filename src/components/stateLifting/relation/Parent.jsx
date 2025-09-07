import React from "react";

const Parent = ({ text }) => {
  console.log(text);
  return (
    <div className="border-3 border-yellow-500 p-5 m-5">
      <h1 className="text-2xl font-bold text-yellow-700">This is Parent Component</h1>
      <h2>{text}</h2>
    </div>
  );
};

export default Parent;
