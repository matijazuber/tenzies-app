import Dice from "./components/dice";
import { useState } from "react";
import Button from "@mui/material/Button";

function generateAllNewDice() {
  let newDice = [];
  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let objectDice = {
      value: randomNumber,
      isHeld: false,
    };
    newDice.push(objectDice);
  }

  return newDice;
}
console.log(generateAllNewDice());

export default function App() {
  const [diceComponent, setDiceComponent] = useState(generateAllNewDice());

  function rollDice() {
    setDiceComponent(generateAllNewDice());
  }

  const diceElements = diceComponent.map((dice, index) => {
    return <Dice key={index} value={dice.value}></Dice>;
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
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#5035ff",
              fontFamily: "Karla",
              padding: "5px 25px",
              letterSpacing: "0%",
            }}
            onClick={rollDice}
            className="roll"
          >
            Roll
          </Button>
        </div>
      </main>
    </>
  );
}
