import React, { createContext, useReducer } from 'react';
import './App.css';
import TilesContainer from './components/TilesContainer';
import DifficultyToggle from './components/DifficultyToggle';
import reducer from './reducers/reducer';

const initialState = {
  difficulty: 5,
  tiles: [],
}

export const AppContext = createContext({});

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      <div className="memory-game">
        <DifficultyToggle />
        <h1>Memory Game</h1>
        <TilesContainer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
