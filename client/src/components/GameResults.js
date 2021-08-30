import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App';
import { ACTIVE, COMPLETE, PREVIEW } from '../constants';

const GameResults = () => {
  const [state, dispatch] = useContext(AppContext);
  const { gameStatus, correctSelections, incorrectSelections, difficulty } = state;

  useEffect(() => {    
    correctSelections === difficulty && dispatch({ type: 'CHANGE_GAME_STATUS', payload: COMPLETE });
  }, [correctSelections, difficulty, dispatch])

  switch (gameStatus) {
    case PREVIEW:
      return <p>Memorize the highlighted cells!</p>;
    
    case ACTIVE:
      return (
        <>
          <p>Click the cells that were highlighted!</p>
          <p>{correctSelections} right out of {difficulty} total with {incorrectSelections} mistake{incorrectSelections !== 1 ? 's' : ''}.</p>
        </>
      );
    
    case COMPLETE:
      return <p>You got all of the boxes with {incorrectSelections} mistake{incorrectSelections !== 1 ? 's' : ''}!</p>
    
    default:
      return null;
  }
  
};

export default GameResults;
