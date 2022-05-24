import React, { useEffect, useState } from "react";
import "./homefeed.css";
import PIN from "../pin/pin";
import HomeNavbar from "../mainnav/homenav";
import Mainboard from "../Mainboard/Mainboard";
import unsplash from "../api/unsplash";
export default function Homefeed() {
  const [pins, setNewPins] = useState([]);
  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
        per_page: 20,
        order_by: "popular",
      },
    });
  };

  const onSearchSubmit = (term) => {
    getImages(term).then((res) => {
      let results = res.data.results;
      let newPins = [...results];
      newPins.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      setNewPins(newPins);
    });
  };

  const getNewPins = () => {
    let setofpins = [];
    let pinData = [];
    let initialpins = ["cars", "sunflowers", "cats", "bali", "dogs"];
    initialpins.forEach((term) => {
      setofpins.push(
        getImages(term).then((res) => {
          let results = res.data.results;
          pinData = pinData.concat(results);
          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          });
        })
      );
    });
    Promise.all(setofpins).then(() => {
      setNewPins(pinData);
    });
  };
  useEffect(() => {
    getNewPins();
  }, []);
  return (
    <div>
      <HomeNavbar onSubmit={onSearchSubmit} />
      <Mainboard pins={pins} mod={false} />
    </div>
  );
}
