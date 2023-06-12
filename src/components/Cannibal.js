import React from "react";
import CannibalAvatar from "./CannibalAvatar";
const Cannibal = (props) => {
  return (
    <div onClick={props.moveCannibal}>
      <CannibalAvatar />
    </div>
  );
};

export default Cannibal;
