import React from "react";
import MonkAvatar from "./MonkAvatar";

const Monk = (props) => {
  return (
    <div onClick={props.moveMonk}>
      <MonkAvatar />
    </div>
  );
};

export default Monk;
