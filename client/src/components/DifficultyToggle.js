import React, { useContext } from 'react';
import { AppContext } from '../App';

const DifficultyToggle = () => {
  const [state, dispatch] = useContext(AppContext);
  
  return (
    <div className="difficulty-container">
      <input
        id="range-toggle"
        type="range"
        min="2"
        max="20"
        value={state.difficulty}
        onChange={e => dispatch({ type: "SET_DIFFICULTY", payload: e.target.value })}
      />
      <label htmlFor="range-toggle">Difficulty: {state.difficulty}</label>
    </div>
  )
}
export default DifficultyToggle;
