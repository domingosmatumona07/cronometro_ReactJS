import React from "react";

export const Button = ({ children: text, onClickFunction, disabled }) => {
  return (
    <button onClick={onClickFunction} disabled={disabled}>
      {text}
    </button>
  );
};
