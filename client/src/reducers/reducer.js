import React from 'react';

const reducer = (state, { type, payload = {} }) => {
  switch (type) {
    case 'SET_DIFFICULTY':
      return {
        ...state,
        difficulty: payload,
      };
    
    case 'SETUP_TILES':
      return {
        ...state,
        tiles: payload,
      };
    
    default:
      return state;
  }
}

export default reducer;
