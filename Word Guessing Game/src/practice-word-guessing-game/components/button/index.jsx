import React from "react";
import "./style.css";

const Type = {
  CIRCULAR: "circle",
  ROUNDED: "rounded",
};

const Button = ({ onClick=()=>{}, label='', type=Type.ROUNDED }={}) => {
    const className =`btn_${type}`
  return <button className={className} onClick={onClick}>{label}</button>;
};

Button.Type = Type
export default Button;
