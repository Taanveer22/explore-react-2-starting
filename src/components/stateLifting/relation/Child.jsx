import React from "react";

const Child = ({ handleProps }) => {
  console.log(handleProps);

  return (
    <div className="border-3 border-teal-500 p-5 m-5">
      <h1 className="text-2xl font-bold text-green-700">This is Child Component</h1>
      <button
        onClick={() => handleProps("data send from child...")}
        className="btn"
      >
        click me to send data
      </button>
    </div>
  );
};

export default Child;
