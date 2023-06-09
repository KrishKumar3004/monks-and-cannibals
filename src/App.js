import React, { useState, useEffect } from "react";
import Left from "./components/Left";
import Right from "./components/Right";
import River from "./components/River";
import Alert from "./components/Alert";

function App() {
  const [cannibalLeft, setCannibalLeft] = useState(3);
  const [monkLeft, setMonkLeft] = useState(3);
  const [cannibalRight, setCannibalRight] = useState(0);
  const [monkRight, setMonkRight] = useState(0);
  const [boatLeft, setBoat] = useState(true);
  const [cannibalOnBoat, setCannibalOnBoat] = useState(0);
  const [monkOnBoat, setMonkOnBoat] = useState(0);
  useEffect(() => {
    // console.log("Cannibal Right", cannibalRight);
    // console.log("Cannibal Left", cannibalLeft);
    // console.log("Monk Right", cannibalRight);
    // console.log("Monk Left", monkLeft);
    // console.log("Monk On Boat", monkOnBoat);
    // console.log("Cannibal on Boat", cannibalOnBoat);
    // console.log("Is boat on left", boatLeft);
  }, [
    cannibalLeft,
    monkLeft,
    cannibalRight,
    monkRight,
    cannibalOnBoat,
    monkOnBoat,
  ]);

  const moveCannibal = () => {
    if (monkOnBoat + cannibalOnBoat < 2) {
      if (boatLeft) {
        setCannibalLeft(cannibalLeft - 1);
        setCannibalOnBoat(cannibalOnBoat + 1);
      } else {
        setCannibalOnBoat(cannibalOnBoat + 1);
        setCannibalRight(cannibalRight - 1);
      }
    }
  };

  const moveMonk = () => {
    if (monkOnBoat + cannibalOnBoat < 2) {
      if (boatLeft) {
        setMonkLeft(monkLeft - 1);
        setMonkOnBoat(monkOnBoat + 1);
      } else {
        setMonkOnBoat(monkOnBoat + 1);
        setMonkRight(monkRight - 1);
      }
    }
  };

  const moveBoat = () => {
    if (monkOnBoat > 0 || cannibalOnBoat > 0) {
      if (boatLeft) {
        setCannibalRight(cannibalRight + cannibalOnBoat);
        if (monkRight + monkOnBoat) setMonkRight(monkRight + monkOnBoat);
        setMonkOnBoat(0);
        setCannibalOnBoat(0);
        setBoat(!boatLeft);
      } else {
        setCannibalLeft(cannibalLeft + cannibalOnBoat);
        setMonkLeft(monkLeft + monkOnBoat);
        setBoat(!boatLeft);
        setMonkOnBoat(0);
        setCannibalOnBoat(0);
      }
    }
  };

  const moveBackMonk = () => {
    if (boatLeft) {
      setMonkLeft(monkLeft + 1);
      setMonkOnBoat(monkOnBoat - 1);
    } else {
      setMonkRight(monkRight + 1);
      setMonkOnBoat(monkOnBoat - 1);
    }
  };

  const moveBackCannibal = () => {
    if (boatLeft) {
      setCannibalLeft(cannibalLeft + 1);
      setCannibalOnBoat(cannibalOnBoat - 1);
    } else {
      setCannibalRight(cannibalRight + 1);
      setCannibalOnBoat(cannibalOnBoat - 1);
    }
  };
  const message = () => {
    if (monkOnBoat == 0 && cannibalOnBoat == 0) {
      if (
        (monkLeft > 0 && monkLeft < cannibalLeft) ||
        (monkRight > 0 && monkRight < cannibalRight)
      ) {
        return <Alert message={"Better Luck Next Time"} />;
      }
    }
    if (monkRight == 3 && cannibalRight == 3) {
      return <Alert message={"Congratulations! You Won"} />;
    }
  };
  return (
    <div className="container" style={{ height: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>Three Monks and Three Cannibles</h1>
      <div className="row" style={{ height: "80%", margin: "3%" }}>
        <div className="col md-2" style={{ backgroundColor: "#16FF00" }}>
          <Left
            monkLeft={monkLeft}
            cannibalLeft={cannibalLeft}
            moveCannibal={() => {
              if (boatLeft) moveCannibal();
            }}
            moveMonk={() => {
              if (boatLeft) moveMonk();
            }}
          />
        </div>
        <div
          className="col md-8"
          style={{ backgroundColor: "#00C4FF", position: "relative" }}
        >
          <River
            moveBoat={moveBoat}
            moveBackCannibal={moveBackCannibal}
            moveBackMonk={moveBackMonk}
            cannibalOnBoat={cannibalOnBoat}
            monkOnBoat={monkOnBoat}
          />
        </div>
        <div className="col md-2" style={{ backgroundColor: "#16FF00" }}>
          <Right
            monkRight={monkRight}
            cannibalRight={cannibalRight}
            moveCannibal={() => {
              if (!boatLeft) moveCannibal();
            }}
            moveMonk={() => {
              if (!boatLeft) moveMonk();
            }}
          />
        </div>
      </div>
      <div> {message()}</div>
    </div>
  );
}

export default App;
