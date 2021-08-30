import React, { createContext, useReducer } from 'react';
import './App.css';
import TilesContainer from './components/TilesContainer';
import DifficultyToggle from './components/DifficultyToggle';
import reducer, { initialState } from './reducers/reducer';
import { ACTIVE, PREVIEW, COMPLETE } from './constants';
import GameResults from './components/GameResults';

export const AppContext = createContext({});

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { gameStatus } = state;
  
  const startGame = () => {
    let timeout = null;

    return () => {
      clearTimeout(timeout);

      dispatch({ type: 'CHANGE_GAME_STATUS', payload: PREVIEW });
      
      timeout = setTimeout(() => {
        dispatch({ type: 'CHANGE_GAME_STATUS', payload: ACTIVE });
      }, 2000)
    }
  };

  const handleButtonClick = () => {
    gameStatus === COMPLETE ? dispatch({ type: 'RESET_GAME' }) : startGame()();
  }

  return (
    <AppContext.Provider value={[state, dispatch]}>
      <div className="memory-game">
        <DifficultyToggle />
        <h1>Memory Game</h1>
        <GameResults />
        {gameStatus !== ACTIVE &&
          <button onClick={handleButtonClick}>Play{gameStatus === COMPLETE ? ' Again?' : ''}</button>
        }
        <TilesContainer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
