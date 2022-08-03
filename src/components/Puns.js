import React, { useState, useEffect } from "react";

function Puns() {
  const [puns, setPuns] = useState([]);
  useEffect(() => {
    fetch("https://mathematrixx2.herokuapp.com/puns")
      .then((res) => res.json())
      .then((puns) => setPuns(puns));
  }, []);
  return (
    <div
      style={{
        display: "block",
        justifyContent: "center",
        alignItems: "",
        height: "60vh",
        background: "white",
      }}
    >
      {puns &&
        puns.map((puns) => {
          return (
            <p key={puns.id}>
              {puns.name}
              {puns.description}
            </p>
          );
        })}
    </div>
  );
}
export default Puns;
