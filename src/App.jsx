import React, { useState } from "react";

function Manish() {
  //   let state = useState(3);
  //   console.log(state);
  //   let show = state[0];
  //   let setter = state[1];

  let [show, setter] = useState(3);

  return (
    <>
      <h1>Hello world</h1>
      <p>{show}</p>
      <button
        onClick={() => {
          setter(show + 1);
        }}
      >
        click me
      </button>
    </>
  );
}

export default Manish;
