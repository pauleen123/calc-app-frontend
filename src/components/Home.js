import { useState } from "react";
import React from "react";
import "./Home.css";
import * as math from "mathjs";
import Button from "./Button";
import Input from "./Input";

export default function Home() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  function addToText(val) {
    setText((text) => [...text, val + " "]);
  }

  const calculateResult = () => {
    const Input = text.join(""); //remove commas
    setResult(math.evaluate(Input));
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  const buttonColor = "#7476b8";
  return (
    <div className="home-styles">
      <h3 className="heading">LETS SOLVE SOME PROBLEMS!</h3>
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Button symbol={7} handleClick={addToText} />
          <Button symbol={8} handleClick={addToText} />
          <Button symbol={9} handleClick={addToText} />
          <Button symbol={"/"} color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol={4} handleClick={addToText} />
          <Button symbol={5} handleClick={addToText} />
          <Button symbol={6} handleClick={addToText} />
          <Button symbol={"#"} color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol={1} handleClick={addToText} />
          <Button symbol={2} handleClick={addToText} />
          <Button symbol={3} handleClick={addToText} />
          <Button symbol={"+"} color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol={0} handleClick={addToText} />
          <Button symbol={"."} handleClick={addToText} />
          <Button symbol={"="} handleClick={calculateResult} />
          <Button symbol={"-"} color={buttonColor} handleClick={addToText} />
        </div>
        <Button symbol={"Clear"} color={buttonColor} handleClick={resetInput} />
      </div>
    </div>
  );
}
