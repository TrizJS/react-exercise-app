import React, { useState } from "react";

const DurationExercise = ({ name }) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const startTimer = () => {
    if (!running) {
      setRunning(true);
      setTime(0);
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setTimeout(() => {
        setRunning(false);
        clearInterval(interval);
      }, 60000);
    }
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Time: {String(Math.floor(time / 60)).padStart(2, "0")}:{String(time % 60).padStart(2, "0")}</p>
      <button onClick={startTimer} disabled={running}>Start</button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
};

export default DurationExercise;
