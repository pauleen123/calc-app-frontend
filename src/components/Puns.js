import React, { useState, useEffect } from "react";
import "./Puns.css";

function Puns() {
  const [puns, setPuns] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/puns")
      .then((res) => res.json())
      .then((puns) => setPuns(puns));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        height: "60vh",
        background: "lightgrey",
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
