import Dice from "./components/dice";

export default function App() {
  return (
    <>
      <main>
        <div>Tenzies</div>
        <div className="desc">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </div>
        <div className="dice">
          <Dice value={1}></Dice>
          <Dice value={1}></Dice>
          <Dice value={1}></Dice>
          <Dice value={1}></Dice>
          <Dice value={1}></Dice>
          <Dice value={1}></Dice>
          <Dice value={1}></Dice>
          <Dice value={1}></Dice>
          <Dice value={1}></Dice>
          <Dice value={1}></Dice>
        </div>
        <div>
          <button className="roll">Roll</button>
        </div>
      </main>
    </>
  );
}
