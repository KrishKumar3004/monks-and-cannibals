import React from "react";

const Monk = (props) => {
  return (
    <div
      onClick={props.moveMonk}
      style={{
        display: "inline",
      }}
    >
      <img src="monk.png" height="100%" width="15%" alt="" />
    </div>
  );
};

export default Monk;
