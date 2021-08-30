import React, { useContext } from 'react';
import { AppContext } from '../App';
import { ACTIVE } from '../constants';
import Tile from './Tile';

const TilesContainer = () => {
  const [state] = useContext(AppContext);
  const { difficulty, tiles, gameStatus } = state;  
  
  const style = {
    gridTemplateColumns: `repeat(${difficulty}, 1fr)`,
    gridTemplateRows: `repeat(${difficulty}, 1fr)`,
  };

  return (
    <div className={`tiles-container${gameStatus === ACTIVE ? ' active-game' : ''}`} style={style}>
      {tiles.map(tile => (
        <Tile key={tile.id} data={tile} />
      ))}
    </div>
  )
};

export default TilesContainer;
