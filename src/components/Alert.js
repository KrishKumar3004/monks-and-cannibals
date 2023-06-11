import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    props.alert && (
      <div>
        <div className={`alert alert-${props.alert.type}`} role="alert">
          {capitalize(props.alert.type)} : {props.alert.message}
        </div>
      </div>
    )
  );
}

export default Alert;
