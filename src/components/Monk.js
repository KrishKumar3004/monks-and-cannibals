import React from "react";

const Monk = (props) => {
  return (
    <div onClick={props.moveMonk} style={{ display: "inline" }}>
      <img src="monk.png" height="45%" width="45%" />
    </div>
  );
};

export default Monk;
