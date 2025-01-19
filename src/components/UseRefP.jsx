import React, { useRef, useState } from "react";

const UseRefP = () => {
  const ref = useRef();
  let [a, seta] = useState(true);
  const btnClick = () => {
    if (a) {
      ref.current.style.display = "none";
      seta(false);
    } else {
      ref.current.style.display = "block";
      seta(true);
    }
  };
  return (
    <div>
      <h1 ref={ref}>Hello, World!</h1>
      <button
        onClick={() => {
          btnClick();
        }}
      >
        Click
      </button>
    </div>
  );
};

export default UseRefP;
