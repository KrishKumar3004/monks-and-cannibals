import React from "react";

const Cannibal = (props) => {
  return (
    <div onClick={props.moveCannibal} style={{ display: "inline" }}>
      <img src="cannibal.png" height="45%" width="45%" alt="" />
    </div>
  );
};

export default Cannibal;
