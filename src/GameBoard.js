import Ship from './Ship';

const GameBoard = () => {
  let name = '';
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

  function setName(str) {
    name = str;
  }

  function getSquare(x, y) {
    board.forEach((square) => {
      if (square.x === x && square.y === y) {
        return square;
      }
    });
    // If the for block didn't return anything
    return null;
  }

  function occupySquare(x, y) {
    const square = getSquare(x, y);
    square.hasShip = true;
  }

  function checkPlacementValidity(size, orientation, x, y) {
    let xOffset = x;
    const yOffset = y;
    let isAvailable = true;
    if (orientation === 'horizontal') {
      for (;xOffset < size; xOffset++) {
        // check fid the ship spaces are valid
        if (y < 1
           || y > 10
           || xOffset < 1
           || xOffset > 10
           || getSquare(xOffset, y).hasShip === true) {
          isAvailable = false;
        }
        // here we will check for free spaces around the ship as well
        const square = getSquare(xOffset, yOffset + 1);
        if (square && square.hasShip === true) {
          isAvailable = false;
        }
        // not finished
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

  return {
    board, placeShip, setName, boardSize,
  };
};

export default GameBoard;
