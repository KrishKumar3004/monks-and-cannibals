import React from "react";
import Cannibal from "./Cannibal";
import Monk from "./Monk";

const Left = (props) => {
  const { moveCannibal, moveMonk, cannibalLeft, monkLeft } = props;
  return (
    <div>
      {Array(cannibalLeft)
        .fill()
        .map((_, i) => (
          <Cannibal key={i} moveCannibal={moveCannibal} />
        ))}
      {Array(monkLeft)
        .fill()
        .map((_, i) => (
          <Monk key={i} moveMonk={moveMonk} />
        ))}
    </div>
  );
};

export default Left;
