import React from "react";
import BoatSVG from "./svgComponents/BoatSVG";

const Boat = (props) => {
  const { moveBoat } = props;
  return (
    <>
      <div
        onClick={moveBoat}
        className={`${props.boatLeft ? "left-boat" : "right-boat"}`}
      >
        <BoatSVG />
      </div>
    </>
  );
};

export default Boat;
