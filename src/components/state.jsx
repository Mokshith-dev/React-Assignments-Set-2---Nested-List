import React from "react";
import City from "./city";
import "./styles/App.css";
export default function State(props) {
  const { id, state, changeCurrentState, changeInState } = props;
  return (
    <>
      <div id={id}></div>
    </>
  );
}
