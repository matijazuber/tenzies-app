import Dice from "./components/dice";
import { useState } from "react";
import Button from "@mui/material/Button";
import { nanoid } from "nanoid";

function generateAllNewDice() {
  let newDice = [];
  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let objectDice = {
      id: nanoid(),
      value: randomNumber,
      isHeld: true,
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

  function toggleHold(id) {
    setDiceComponent((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );
  }

  const diceElements = diceComponent.map((dice) => {
    return (
      <Dice
        holdDice={() => toggleHold(dice.id)}
        isHeld={dice.isHeld}
        key={dice.id}
        value={dice.value}
      ></Dice>
    );
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
              backgroundColor: "#5035FF",
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
