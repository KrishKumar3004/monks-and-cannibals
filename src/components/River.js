import React from "react";
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
    <div>
      <Boat moveBoat={moveBoat} />
      {Array(cannibalOnBoat)
        .fill()
        .map((_, i) => (
          <Cannibal key={i} moveCannibal={moveBackCannibal} />
        ))}
      {Array(monkOnBoat)
        .fill()
        .map((_, i) => (
          <Monk key={i} moveMonk={moveBackMonk} />
        ))}
    </div>
  );
};

export default River;
