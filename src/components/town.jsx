import React from "react";

export default function Town(props) {
  const { city, data, state, stateId, cityId } = props;
  //console.log(city);
  //console.log(state);
  return (
    <>
      {city
        ? data[stateId].cities[cityId].towns.map((town, idx) => (
            <div id={`town${idx + 1}`}>{town.name}</div>
          ))
        : ""}
    </>
  );
}
