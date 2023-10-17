import Ship from './Ship';

const GameBoard = () => {
  let name = '';
  const boardSize = 10;
  const board = [];
  const ships = [];
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
          shipId: 0,
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

  function occupySquare(x, y, shipId) {
    const square = getSquare(x, y);
    if (square) {
      square.hasShip = true;
      square.shipId = shipId;
    } else {
      console.log('Error: no square found to occupy');
    }
  }

  function checkSquareAroundShip(square) {
    if (square !== null) {
      if (square.hasShip) {
        return false;
      }
    }
    return true;
  }

  function checkPlacementValidity(size, direction, x, y) {
    let square;
    let xOffset = x;
    let yOffset = y;
    let isAvailable = true;
    if (direction === 'horizontal') {
      for (let i = 0; i < size; i++) {
        square = getSquare(xOffset, y);
        if (square === null || square.hasShip) {
          isAvailable = false;
        }
        xOffset++;
      }

      // check in the front of a ship for other ship
      xOffset = x;
      square = getSquare(xOffset - 1, y);
      if (!checkSquareAroundShip(square)) {
        return false;
      }
      square = getSquare(xOffset - 1, y + 1);
      if (!checkSquareAroundShip(square)) {
        return false;
      }
      square = getSquare(xOffset - 1, y - 1);
      if (!checkSquareAroundShip(square)) {
        return false;
      }

      // check the sides of the ship for other ships
      for (let i = 0; i < size; i++) {
        square = getSquare(xOffset, y + 1);
        if (!checkSquareAroundShip(square)) {
          return false;
        }
        square = getSquare(xOffset, y - 1);
        if (!checkSquareAroundShip(square)) {
          return false;
        }
        xOffset++;
      }

      // check the end of the ship for t=other ships
      xOffset = x + size;
      square = getSquare(xOffset, y);
      if (!checkSquareAroundShip(square)) {
        return false;
      }
      square = getSquare(xOffset, y + 1);
      if (!checkSquareAroundShip(square)) {
        return false;
      }
      square = getSquare(xOffset, y - 1);
      if (!checkSquareAroundShip(square)) {
        return false;
      }
    } else {
      // For the vertical position
      for (let i = 0; i < size; i++) {
        square = getSquare(x, yOffset);
        if (square === null || square.hasShip) {
          isAvailable = false;
        }
        yOffset++;
      }

      // check in the front of a ship for other ship
      yOffset = y;
      square = getSquare(x, yOffset - 1);
      if (!checkSquareAroundShip(square)) {
        return false;
      }
      square = getSquare(x + 1, yOffset - 1);
      if (!checkSquareAroundShip(square)) {
        return false;
      }
      square = getSquare(x - 1, yOffset - 1);
      if (!checkSquareAroundShip(square)) {
        return false;
      }

      // check the sides of the ship for other ships
      for (let i = 0; i < size; i++) {
        square = getSquare(x + 1, yOffset);
        if (!checkSquareAroundShip(square)) {
          return false;
        }
        square = getSquare(x - 1, yOffset);
        if (!checkSquareAroundShip(square)) {
          return false;
        }
        yOffset++;
      }

      // check the end of the ship for the other ships
      yOffset = y + size;
      square = getSquare(x, yOffset);
      if (!checkSquareAroundShip(square)) {
        return false;
      }
      square = getSquare(x + 1, yOffset);
      if (!checkSquareAroundShip(square)) {
        return false;
      }
      square = getSquare(x - 1, yOffset);
      if (!checkSquareAroundShip(square)) {
        return false;
      }
    }
    return isAvailable;
  }

  function addShipToBoard(ship, x, y, direction) {
    if (direction === 'horizontal') {
      for (let i = 0; i < ship.length; i++) {
        occupySquare(x, y, ship.id);
        x++;
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        occupySquare(x, y, ship.id);
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
      ships.push(ship);
    } else {
      console.log('invalid move');
      return;
    }
    console.log('ship placed successfully. size:', size);
  }

  function checkIfAllSunk() {
    for (let i = 0; i < ships.length; i++) {
      const ship = ships[i];
      if (!ship.sunk) {
        return false;
      }
    }
    return true;
  }

  function attackSquare(x, y) {
    const square = getSquare(x, y);
    if (square && square.hasShip) {
    }
  }

  return {
    board,
    placeShip,
    setName,
    boardSize,
    shipsToPlace,
    changeDirection,
    checkIfAllSunk,
    ships,
    attackSquare,
  };
};

export default GameBoard;
