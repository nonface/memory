import { IDLE } from "../constants";

export const setupTiles = difficulty => {
  const tiles = Array(difficulty);
  let winningTiles = [];

  while (winningTiles.length < difficulty) {
    const tileNumber = Math.floor(Math.random() * (difficulty ** 2));
    winningTiles.includes(tileNumber) || winningTiles.push(tileNumber);
  }

  for (let i = 0; i < difficulty ** 2; i++) {
    tiles[i] = {
      id: i,
      selected: false,
      winningTile: winningTiles.includes(i),
    }
  };

  return tiles;
}

export const initialState = {
  difficulty: 5,
  tiles: setupTiles(5),
  gameStatus: IDLE,
  correctSelections: 0,
  incorrectSelections: 0,
};

const reducer = (state, { type, payload = {} }) => {
  switch (type) {
    case 'SET_DIFFICULTY':
      return {
        ...state,
        difficulty: +payload,
        gameStatus: IDLE,
        correctSelections: 0,
        incorrectSelections: 0,
        tiles: setupTiles(+payload),
      };    
    
    case 'RESET_GAME':
      return {
        ...initialState,
        difficulty: state.difficulty,
        tiles: setupTiles(state.difficulty),
      };
    
    case 'CHANGE_GAME_STATUS':
      return {
        ...state,
        gameStatus: payload,
      };
    
    case 'TILE_CLICKED':
      return {
        ...state,
        tiles: state.tiles.map(tile => ({
          ...tile,
          selected: tile.id === payload.id ? true : tile.selected,
        })),
        ...state.tiles.find(({ id }) => id === payload.id)?.winningTile ? { correctSelections: state.correctSelections++ } : { incorrectSelections: state.incorrectSelections++ }
      };
    
    default:
      return state;
  }
}

export default reducer;
