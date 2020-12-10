import React from "react";

export default function Town(props) {
  const { city } = props;
  return (
    <>
      {city
        ? city.towns.map((town, idx) => (
            <div id={`town${idx + 1}`}>{town.name}</div>
          ))
        : ""}
    </>
  );
}
