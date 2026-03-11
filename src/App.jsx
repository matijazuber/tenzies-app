import Dice from "./components/dice";
import { useState } from "react";

function generateAllNewDice() {
  let newDice = [];
  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    newDice.push(randomNumber);
  }
  return newDice;
}

export default function App() {
  const [diceComponent, setDiceComponent] = useState(generateAllNewDice());

  function rollDice() {
    setDiceComponent(generateAllNewDice());
  }

  const diceElements = diceComponent.map((dice, index) => {
    return <Dice key={index} value={dice}></Dice>;
  });
  return (
    <>
      <main>
        <div>Tenzies</div>
        <div className="desc">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </div>
        <div className="dice-container">{diceElements}</div>
        <div>
          <button onClick={rollDice} className="roll">
            Roll
          </button>
        </div>
      </main>
    </>
  );
}
