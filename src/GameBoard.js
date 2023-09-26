const GameBoard = () => {
  const boardSize = 10;
  const board = [];

  function initBoard() {
    for (let x = 1; x <= boardSize; x++) {
      for (let y = 1; y <= boardSize; y++) {
        board.push({
          x,
          y,
          attacked: false,
          hasShip: false,
        });
      }
    }
  }
  initBoard();

  return { board };
};

export default GameBoard;
