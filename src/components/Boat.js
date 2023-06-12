import React from "react";
import Cannibal from "./Cannibal";
import Monk from "./Monk";
import "./boat.css";
import BoatSVG from "./svgComponents/BoatSVG";

const Boat = (props) => {
  const {
    moveBoat,
    cannibalOnBoat,
    monkOnBoat,
    moveBackCannibal,
    moveBackMonk,
  } = props;
  return (
    <>
      <div className="mc-on-river">
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
      <div onClick={moveBoat} className="boatSVG">
        <BoatSVG />
      </div>
    </>
  );
};

export default Boat;
