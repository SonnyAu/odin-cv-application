import React from "react";
import "../styles/PersonalInfo.css";

export default function PersonalInfo(props) {
  return (
    <div>
      <p>{props.firstName + " " + props.lastName}</p>
      <p>{props.email}</p>
      <p>{props.number}</p>
    </div>
  );
}
