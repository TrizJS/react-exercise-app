import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

const App = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div>
      <h1>Exercise App</h1>
      {!selectedExercise ? (
        <div>
          <button onClick={() => setSelectedExercise("Push-ups")}>Push-ups (Reps)</button>
          <button onClick={() => setSelectedExercise("Plank")}>Plank (Duration)</button>
        </div>
      ) : (
        <div>
          {selectedExercise === "Push-ups" ? (
            <RepetitionExercise name="Push-ups" />
          ) : (
            <DurationExercise name="Plank" />
          )}
          <button onClick={() => setSelectedExercise(null)}>Back to Menu</button>
        </div>
      )}
    </div>
  );
};

export default App;
