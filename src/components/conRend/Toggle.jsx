import { useState } from "react";
import Contact from "./Contact";
import Service from "./Service";

const Toggle = () => {
  const [status, setStatus] = useState(true);
  const handleStatus = () => {
    setStatus(!status);
    alert(status);
  };
  // console.log(status);
  return (
    <div className="mb-5">
      <h2 className="text-2xl font-semibold">toggle in react</h2>
      <button onClick={handleStatus} className="btn btn-info mb-3">
        click to toggle status
      </button>
      {status ? <Service></Service> : <Contact></Contact>}
    </div>
  );
};

export default Toggle;
