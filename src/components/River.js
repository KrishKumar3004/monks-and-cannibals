import React, { useState } from "react";
import Cannibal from "./Cannibal";
import Monk from "./Monk";
import Boat from "./Boat";

const River = (props) => {
  const {
    moveBoat,
    cannibalOnBoat,
    monkOnBoat,
    moveBackCannibal,
    moveBackMonk,
  } = props;
  return (
    <div className="middle">
      <div
        className={`middle-items ${
          props.boatLeft ? "left-boat" : "right-boat"
        }`}
      >
        <Boat
          moveBoat={moveBoat}
          boatLeft={props.boatLeft}
          cannibalOnBoat={cannibalOnBoat}
          monkOnBoat={monkOnBoat}
          moveBackCanniback={moveBackCannibal}
          moveBackMonk={moveBackMonk}
        />
      </div>

      <div className="river"></div>
    </div>
  );
};

export default River;
