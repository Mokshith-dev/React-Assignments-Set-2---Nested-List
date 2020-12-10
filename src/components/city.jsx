import React, { useState } from "react";
import Town from "./town";

export default function City(props) {
  const [currentCity, setCurrentCity] = useState("");
  const { state, data, stateId } = props;
  console.log(state);
  return (
    <>
      {state
        ? data[stateId].cities.map((city, idx) => (
            <div
              id={`city${idx + 1}`}
              onClick={() => setCurrentCity(city.name)}
            >
              {city.name}
              <Town
                city={currentCity}
                data={data}
                state={state}
                stateId={stateId}
                cityId={idx}
              />
            </div>
          ))
        : ""}
    </>
  );
}
