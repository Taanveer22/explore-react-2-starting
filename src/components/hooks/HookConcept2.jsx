import { useState, useEffect } from "react";

const HookConcept2 = () => {
  const [name, setName] = useState("hero alom");
  useEffect(() => console.log("hello from use effect..."), [name]);
  const handleChangeName = () => {
    setName(name.slice(4, 9));
    // setName("gias uddin");
  };
  return (
    <div>
      <h2 className="text-2xl font-medium">
        after setter function invoked : {name}
      </h2>
      <button className="btn btn-accent" onClick={handleChangeName}>
        click to change name
      </button>
    </div>
  );
};

export default HookConcept2;
