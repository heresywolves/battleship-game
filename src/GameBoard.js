import Ship from './Ship';

const GameBoard = () => {
  const boardSize = 10;
  const board = [];
  // numbers in array represent the sizes of ships
  const shipsToPlace = [5, 4, 4, 3, 3, 3, 2, 2, 2, 2];

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

  function getSquare(x, y) {
    board.forEach((square) => {
      if (square.x === x && square.y === y) {
        return square;
      }
    });
    // If the for block didn't return anything
    throw new Error('Error: Couldn\'t find x and y in getSquare function');
  }

  function occupySquare(x, y) {
    const square = getSquare(x, y);
    square.hasShip = true;
  }

  function checkPlacementValidity(size, orientation, x, y) {
    let xOffset = x;
    let isAvailable = true;
    if (orientation === 'horizontal') {
      for (let i = 0; i < size; i++) {
        xOffset += 0;
        if (y < 1 && y > 10 && xOffset < 1 && xOffset > 10) {
          isAvailable = false;
        }
      }
    }
    return isAvailable;
  }

  function placeShip(x, y) {
    if (shipsToPlace.length === 0) {
      throw new Error('Error: Out of available ships to place');
    }
    const size = shipsToPlace.shift();
    const ship = Ship(size);
  }

  return { board, placeShip };
};

export default GameBoard;
