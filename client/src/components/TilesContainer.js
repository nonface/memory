import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App';
import Tile from './Tile';

const TilesContainer = () => {
  const [state, dispatch] = useContext(AppContext);
  const { difficulty, tiles } = state;

  const setupTiles = () => {
    const array = Array(difficulty);
    let winningTiles = [];

    while (winningTiles.length < difficulty) {
      const tileNumber = Math.floor(Math.random() * (difficulty ** 2));
      winningTiles.includes(tileNumber) || winningTiles.push(tileNumber);
    }

    for (let i = 0; i < difficulty ** 2; i++) {
      array[i] = {
        id: i,
        selected: false,
        winningTile: winningTiles.includes(i),
      }
    };

    return array;
  };
  
  useEffect(() => {
    const tiles = setupTiles();    
    dispatch({ type: 'SETUP_TILES', payload: tiles });
  }, [difficulty]);
  
  const style = {    
    gridTemplateColumns: `repeat(${difficulty}, 1fr)`,
    gridTemplateRows: `repeat(${difficulty}, 1fr)`,
  }

  return (
    <div className="tiles-container" style={style}>
      {tiles.map(tile => (
        <Tile key={tile.id} data={tile} />
      ))}
    </div>
  )
};

export default TilesContainer;
