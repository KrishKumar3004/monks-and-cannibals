import * as React from "react";
const Land = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" {...props}>
    <rect width="100%" height="100%" fill="skyblue" />
    <rect width="100%" height="70%" fill="#548235" />
    <rect x={0} y="70%" width="100%" height="30%" fill="#548235" />
  </svg>
);
export default Land;
