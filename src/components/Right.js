import React from "react";
import Cannibal from "./Cannibal";
import Monk from "./Monk";

const Right = (props) => {
  const { moveCannibal, moveMonk, cannibalRight, monkRight } = props;
  return (
    <div style={{ position: "absolute", bottom: 0 }}>
      {Array(cannibalRight)
        .fill()
        .map((_, i) => (
          <Cannibal key={i} moveCannibal={moveCannibal} />
        ))}
      {Array(monkRight)
        .fill()
        .map((_, i) => (
          <Monk key={i} moveMonk={moveMonk} />
        ))}
    </div>
  );
};

export default Right;
