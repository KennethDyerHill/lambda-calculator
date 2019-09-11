import React from "react";

// accept props as argument
const OperatorButton = (props) => {
  return (
    <button className="operatorClass" onClick={() => props.addOperator(props.operator.value)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.operator.char}
    </button>
  );
};

export default OperatorButton;