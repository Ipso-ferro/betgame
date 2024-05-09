import "./App.css";
import React, { useState } from "react";
import BottonButton from "./components/component_bot";
import TopButton from "./components/component_top";
import LeftButton from "./components/component_left";
import RightButton from "./components/component_right";

function App() {
  const [luckyNumber, setLuckyNumber] = useState(null);
  const [userChoice, setUserChoice] = useState(null);
  const [result, setResult] = useState("");

  function randomClick() {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log(randomNumber);
    setLuckyNumber(randomNumber);
  }

  function handleClick(buttonType) {
    setUserChoice(buttonType);
    // Compare user's choice with lucky number and update result
    if (buttonType === "Bot Button" && luckyNumber < 80) {
      setResult("You won!");
    } else if (
      buttonType === "Top Button" &&
      luckyNumber > 81 &&
      luckyNumber < 90
    ) {
      setResult("You won!");
    } else if (
      buttonType === "Left Button" &&
      luckyNumber > 91 &&
      luckyNumber < 95
    ) {
      setResult("You won!");
    } else if (
      buttonType === "Right Button" &&
      luckyNumber > 96 &&
      luckyNumber < 100
    ) {
      setResult("You won!");
    } else {
      setResult("You lost!");
    }
  }

  function prize(LuckyNumber) {
    let prize;
    if (LuckyNumber === null) {
      prize = "Make a choice to reveal your prize.";
    } else if (LuckyNumber < 80) {
      prize = <BottonButton />;
    } else if (LuckyNumber > 81 && LuckyNumber < 90) {
      prize = <TopButton />;
    } else if (LuckyNumber > 91 && LuckyNumber < 95) {
      prize = <LeftButton />;
    } else if (LuckyNumber > 96 && LuckyNumber <= 100) {
      prize = <RightButton />;
    }
    return prize;
  }

  return (
    <>
      <button onClick={() => handleClick("Bot Button")}>
        <BottonButton />
      </button>
      <button onClick={() => handleClick("Top Button")}>
        <TopButton />
      </button>
      <button onClick={() => handleClick("Left Button")}>
        <LeftButton />
      </button>
      <button onClick={() => handleClick("Right Button")}>
        <RightButton />
      </button>
      <h1>Your Choice: {userChoice}</h1>
      <h1>prize: {prize(luckyNumber)}</h1>
      <h2>{result}</h2>
      <button onClick={randomClick}>Randomize Lucky Number</button>
    </>
  );
}

export default App;
