import React, { useState } from "react";
import PIN from "../pin/pin";
import PIND from "../pindetails/pindetails";
import "./Mainboard.css";

function Mainboard(props, mod) {
  let { pins } = props;
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImg] = useState("");
  const getImg = (imgSrc) => {
    setTempImg(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <div className="models">
          <div className="tbbutton">
            <button
              className="cross"
              onClick={() => {
                setModel(false);
              }}
            >
              x
            </button>
          </div>
          <div className="pic">
            <img src={tempimgSrc} />
          </div>
        </div>
      </div>
      <div className="mainboard">
        <div className="mainboard__container">
          {pins.map((pin, index) => {
            let { urls } = pin;

            return (
              <div onClick={() => getImg(pin.urls?.regular)}>
                <PIN key={index} urls={urls} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Mainboard;
