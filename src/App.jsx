import React, { useState } from "react";

const Manish = () => {
  const [state, setState] = useState(50);
  let increase = () => {
    setState(state + 1);
  };
  let decrease = () => {
    setState(state - 1);
  };
  return (
    <>
      <h1>{state}</h1>
      <button
        // onClick={() => {
        //   setState(state + 1);
        // }}
        onClick={increase}
      >
        +
      </button>
      <button
        // onClick={() => {
        //   setState(state - 1);
        // }}
        onClick={decrease}
      >
        -
      </button>
    </>
  );
};

export default Manish;
