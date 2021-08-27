import React from 'react';

const Tile = ({ data }) => {
  const { winningTile } = data; 
  const style = {
    ...winningTile ? { background: 'blue' } : {}
  };
  
  return <div className="tile" style={style} />;
};

export default Tile;
