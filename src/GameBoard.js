import Ship from './Ship';

const GameBoard = () => {
  let name = '';
  const boardSize = 10;
  const board = [];
  // numbers in array represent the sizes of ships
  const shipsToPlace = [5, 4, 4, 3, 3, 3, 2, 2, 2, 2];
  let placementDirection = 'horizontal';

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

  function changeDirection() {
    if (placementDirection === 'horizontal') {
      placementDirection = 'vertical';
    } else {
      placementDirection = 'horizontal';
    }
    console.log('placement direction switched');
  }

  function occupySquare(x, y) {
    const square = getSquare(x, y);
    square
      ? (square.hasShip = true)
      : console.log('Error: no square found to occupy');
  }

  function checkPlacementValidity(size, direction, x, y) {
    let xOffset = x;
    let yOffset = y;
    let isAvailable = true;
    if (direction === 'horizontal') {
      for (let i = 0; i < size; i++) {
        const square = getSquare(xOffset, y);
        if (square === null || square.hasShip) {
          isAvailable = false;
        }
        xOffset++;
      }
    } else {
      for (let i = 0; i < size; i++) {
        const square = getSquare(x, yOffset);
        if (square === null || square.hasShip) {
          isAvailable = false;
        }
        yOffset++;
      }
    }
    return isAvailable;
  }

  function addShipToBoard(ship, x, y, direction) {
    if (direction === 'horizontal') {
      for (let i = 0; i < ship.length; i++) {
        occupySquare(x, y);
        x++;
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        occupySquare(x, y);
        y++;
      }
    }
  }

  function placeShip(x, y) {
    if (shipsToPlace.length === 0) {
      console.log('Error: Out of ships to place');
      return;
    }
    const size = shipsToPlace[0];
    if (checkPlacementValidity(size, placementDirection, x, y)) {
      const ship = Ship(size);
      console.log('valid move');
      console.log('placing ship at ', x, y);
      shipsToPlace.shift();
      addShipToBoard(ship, x, y, placementDirection);
    } else {
      console.log('invalid move');
      return;
    }
    console.log('ship placed successfully. size:', size);
  }

  return {
    board,
    placeShip,
    setName,
    boardSize,
    shipsToPlace,
    changeDirection,
  };
};

export default GameBoard;
