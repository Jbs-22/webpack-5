import { useState } from "react";

const Hook = () => {
  const [state, setSate] = useState("Initial Sate");
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setSate("Button clicked")}>Click Me</button>
    </div>
  );
};

export default Hook;
