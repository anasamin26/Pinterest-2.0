import React, { useState, Component } from "react";
import "./main.css";
import Navbar from "../Navbar/navbar";

class Main extends React.Component {
  state = {
    divcontainer1: true,
    divcontainer2: false,
    divcontainer3: false,
    divcontainer4: false,
  };

  render() {
    var HandleChange1 = (e) => {
      this.setState({ divcontainer1: !this.state.divcontainer1 });
      this.setState({ divcontainer2: false });
      this.setState({ divcontainer3: false });
      this.setState({ divcontainer4: false });
    };
    var HandleChange2 = (e) => {
      this.setState({ divcontainer2: !this.state.divcontainer2 });
      this.setState({ divcontainer1: false });
      this.setState({ divcontainer3: false });
      this.setState({ divcontainer4: false });
    };
    var HandleChange3 = (e) => {
      this.setState({ divcontainer3: !this.state.divcontainer3 });
      this.setState({ divcontainer1: false });
      this.setState({ divcontainer2: false });
      this.setState({ divcontainer4: false });
    };
    var HandleChange4 = (e) => {
      this.setState({ divcontainer4: !this.state.divcontainer4 });
      this.setState({ divcontainer1: false });
      this.setState({ divcontainer3: false });
      this.setState({ divcontainer2: false });
    };

    setInterval(() => {
      this.setState({ divcontainer2: true });
      this.setState({ divcontainer1: false });
      this.setState({ divcontainer3: false });
      this.setState({ divcontainer4: false });
    }, 1000);

    const w = this.state.divcontainer1;
    const x = this.state.divcontainer2;
    const y = this.state.divcontainer3;
    const z = this.state.divcontainer4;

    return (
      <div>
        <Navbar />
        <div>
          <div className="abc ">Get your next </div>;
          <ul class="uls">
            <li>
              <button
                onClick={HandleChange1}
                aria-label="Dot 1"
                class="b1"
              ></button>
            </li>
            {w && <div class="def">weeknight dinner idea</div>}
            <li>
              <button
                onClick={HandleChange2}
                aria-label="Dot 2"
                class="b2"
              ></button>
            </li>
            {x && <div class="def1">home decor idea</div>}

            <li>
              <button
                onClick={HandleChange3}
                aria-label="Dot 3"
                class="b3"
              ></button>
            </li>
            {y && <div class="def2">new look outfit</div>}
            <li>
              <button
                onClick={HandleChange4}
                aria-label="Dot 4"
                class="b4"
              ></button>
            </li>
            {z && <div class="def3">green thumb idea</div>}
          </ul>
          <div className="back"></div>
        </div>
      </div>
    );
  }
}
export default Main;
