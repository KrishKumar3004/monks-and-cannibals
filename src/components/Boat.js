import React from "react";

const Boat = (props) => {
  return (
    <div
      onClick={props.moveBoat}
      style={{ position: "absolute", bottom: "5%", left: "5%" }}
    >
      <img src="boat.svg" height="45%" width="45%" alt="" />
    </div>
  );
};

export default Boat;
