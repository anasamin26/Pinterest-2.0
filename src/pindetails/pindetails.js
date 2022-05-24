import React, { useState } from "react";
import Mainboard from "../Mainboard/Mainboard";
import "./pindetails.css";

export default function PIND(source, mod) {
  console.log(source);

  return (
    <>
      <div className="model open  ">
        <div className="titleCloseBtn">
          <button
            className="cross"
            onClick={() => {
              mod(false);
            }}
          >
            x
          </button>
        </div>
        <img src={source.source} />
      </div>
    </>
  );
}
