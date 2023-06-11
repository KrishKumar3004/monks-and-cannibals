import React from "react";

const Cannibal = (props) => {
  return (
    <div onClick={props.moveCannibal} style={{ display: "inline" }}>
      <img
        className="mx-1"
        src="cannibal.png"
        height="100%"
        width="15%"
        alt=""
      />
    </div>
  );
};

export default Cannibal;
