import Ship from './Ship';

const GameBoard = () => {
  let name = '';
  const boardSize = 10;
  const board = [];
  // numbers in array represent the sizes of ships
  const shipsToPlace = [5, 4, 4, 3, 3, 3, 2, 2, 2, 2];

  function initBoard() {
    for (let y = 1; y <= boardSize; y++) {
      for (let x = 1; x <= boardSize; x++) {
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
    for (let i = 0; i < board.length; i++) {
      if (board[i].x === x && board[i].y === y) {
        return board[i];
      }
    }
    return null;
  }

  function occupySquare(x, y) {
    const square = getSquare(x, y);
    console.log(square);
    square.hasShip = true;
  }

  function checkPlacementValidity(size, orientation, x, y) {
    const xOffset = x;
    const yOffset = y;
    const isAvailable = true;
    if (orientation === 'horizontal') {
    }
    return isAvailable;
  }

  function addShipToBoard(ship, x, y, direction) {
    if (direction === 'horizontal') {
      for (let i = 0; i < ship.length; i++) {
        occupySquare(x, y);
        x++;
      }
    }
  }

  function placeShip(x, y) {
    if (shipsToPlace.length === 0) {
      console.log('Error: Out of ships to place');
    }
    const size = shipsToPlace.shift();
    const ship = Ship(size);
    if (checkPlacementValidity(size, 'horizontal', x, y)) {
      console.log('valid move');
      console.log('placing ship at ', x, y);
      addShipToBoard(ship, x, y, 'horizontal');
    } else {
      console.log('invalid move');
    }
    console.log('ship placed successfully. size:', size);
  }

  return {
    board, placeShip, setName, boardSize, shipsToPlace,
  };
};

export default GameBoard;
