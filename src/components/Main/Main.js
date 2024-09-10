import React from "react";
import "./Main.css";
import Button from "../Buttons/Button";
import Slider from "../Slider/Slider";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="left-column">
          <h2>Computer And Laptop</h2>
          <h1>Accesories</h1>
          <h3>
            There are many variations of passages of Lorem Ipsum avaliable,but{" "}
            <br />
            the majority have sufflered alternation in some form , by injected{" "}
            <br /> humour, or
          </h3>
          <Button />
        </div>
        <div className="right-column">
          <Slider/>
        </div>
      </div>
    </>
  );
};

export default Main;
