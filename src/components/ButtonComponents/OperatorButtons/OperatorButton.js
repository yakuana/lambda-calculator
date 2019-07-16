import React from "react";

export const OperatorButton = ({character}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="operator-button">{character}</button>
    </>
  );
};
