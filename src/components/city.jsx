import React, { useState } from "react";
import Town from "./town";

export default function City(props) {
  const [currentCity, setCurrentCity] = useState("");
  const { state } = props;
  return (
    <>
      {state
        ? state.cities.map((city, idx) => (
            <div
              id={`city${idx + 1}`}
              onClick={() => setCurrentCity(city.name)}
            >
              {city.name}
              <Town city={currentCity} />
            </div>
          ))
        : ""}
    </>
  );
}
