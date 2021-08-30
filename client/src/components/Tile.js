import React, { useContext } from 'react';
import { AppContext } from '../App';
import { ACTIVE, COMPLETE, IDLE, PREVIEW } from '../constants';

const Tile = ({ data }) => {
  const [state, dispatch] = useContext(AppContext);
  const { gameStatus } = state;
  const { winningTile } = data; 
  const style = {
    ...gameStatus === IDLE && { background: 'grey' },
    ...(gameStatus === PREVIEW && winningTile) && { background: 'blue' },
    ...([ACTIVE, COMPLETE].includes(gameStatus) && !data.selected) && { background: 'white' },
    ...([ACTIVE, COMPLETE].includes(gameStatus) && data.selected) && { background: data.winningTile ? 'green' : 'red' },
  };

  const handleTileClick = () => {
    data.selected || dispatch({ type: 'TILE_CLICKED', payload: { id: data.id } });
  };

  return <div className="tile" style={style} onClick={handleTileClick} />;
};

export default Tile;
