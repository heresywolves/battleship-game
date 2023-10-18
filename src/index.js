import './style.css';
import Ship from './Ship';
import GameBoard from './GameBoard';
import uiController from './uiController';
import Racoon from './racoon.jpg';

const image1 = new Image();
image1.src = Racoon;
document.querySelector('.img-container').appendChild(image1);

// Game logic
const gameStarted = true;
const myBoard = GameBoard();
myBoard.setName('my');

const enemyBoard = GameBoard();
enemyBoard.setName('enemy');

uiController.drawBoard(myBoard, 'left');
uiController.drawBoard(enemyBoard, 'right');

setRandomShips(enemyBoard);
uiController.clearBoard('right');
uiController.drawBoard(enemyBoard, 'right');

const mySquares = document.querySelectorAll('.left-side .square');
mySquares.forEach((square) => square.addEventListener('click', placeShip));
mySquares.forEach((square) =>
  square.addEventListener('mouseover', highlightShipPlacement)
);

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    myBoard.changeDirection();
  }
});

function removeEventListenersFromMyBoard() {
  const mySquares = document.querySelectorAll('.left-side .square');
  mySquares.forEach((square) => square.removeEventListener('click', placeShip));
  mySquares.forEach((square) =>
    square.removeEventListener('mouseover', highlightShipPlacement)
  );
  console.log('removed listeners');
}

function refreshListeners() {
  const enemySquares = document.querySelectorAll('.right-side .square');
  removeEventListenersFromMyBoard();
  const mySquares = document.querySelectorAll('.left-side .square');
  mySquares.forEach((square) => square.addEventListener('click', placeShip));
  mySquares.forEach((square) =>
    square.addEventListener('mouseover', highlightShipPlacement)
  );
  console.log('added listeners');
}

function placeShip(e) {
  const classes = e.target.className;
  const tempArr = classes.split(' ');
  const xString = tempArr[2];
  const yString = tempArr[3];
  const x = +xString.split('-')[1];
  const y = +yString.split('-')[1];
  myBoard.placeShip(x, y);
  uiController.clearBoard('left');
  uiController.drawBoard(myBoard, 'left');
  console.log('clicked on:', x, y);
  if (myBoard.shipsToPlace.length === 0) {
    removeEventListenersFromMyBoard();
    console.log('game start');
    startGame();
    return;
  }
  refreshListeners();
}

function highlightShipPlacement(e) {
  const nextShipArr = myBoard.shipsToPlace;
  const shipSize = nextShipArr[0];
  const elements = document.querySelectorAll('.left-side .square');
  elements.forEach((el) => {
    el.classList.remove('highlight');
  });
  e.target.classList.add('highlight');
  const direction = myBoard.getDirection();
  if (direction === 'horizontal') {
    let x = +e.target.className.split(' ')[2].split('-')[1];
    const y = +e.target.className.split(' ')[3].split('-')[1];
    for (let i = 0; i < shipSize; i++) {
      if (x && y) {
        const query = `.x-${x}.y-${y}`;
        const square = document.querySelector(query);
        if (square) {
          square.classList.add('highlight');
        }
        x++;
      }
    }
  } else {
    const x = +e.target.className.split(' ')[2].split('-')[1];
    let y = +e.target.className.split(' ')[3].split('-')[1];
    for (let i = 0; i < shipSize; i++) {
      if (x && y) {
        const query = `.x-${x}.y-${y}`;
        const square = document.querySelector(query);
        if (square) {
          square.classList.add('highlight');
        }
        y++;
      }
    }
  }
}

function randomInt(max) {
  // from 1 to max including max
  return Math.floor(Math.random() * max) + 1;
}

function setRandomShips(board) {
  let i = 0;
  while (i < 10000) {
    if (board.shipsToPlace.length === 0) {
      break;
    }
    board.changeDirection();
    const randX = randomInt(10);
    const randY = randomInt(10);
    board.placeShip(randX, randY);
    console.log('itaration: ', i);
    console.log(board.shipsToPlace.length);
    i++;
  }
}

function addListenersToEnemyBoard() {
  const enemySquares = document.querySelectorAll('.right-side .square');
  enemySquares.forEach((square) =>
    square.addEventListener('click', attackEnemy)
  );
  enemySquares.forEach((square) =>
    square.addEventListener('mouseover', highlightAttack)
  );
}

function removeListenersFromEnemyBoard() {
  const enemySquares = document.querySelectorAll('.right-side .square');
  enemySquares.forEach((square) =>
    square.removeEventListener('click', attackEnemy)
  );
  enemySquares.forEach((square) =>
    square.removeEventListener('mouseover', highlightAttack)
  );
}

function highlightAttack(e) {
  const elements = document.querySelectorAll('.right-side .square');
  elements.forEach((el) => {
    el.classList.remove('highlight');
  });
  e.target.classList.add('highlight');
}

function attackEnemy(e) {
  const arr = e.target.className.split(' ');
  const x = +arr[2].split('-')[1];
  const y = +arr[3].split('-')[1];
  enemyBoard.attackSquare(x, y);
  const square = enemyBoard.getSquare(x, y);
  uiController.hitSquare(square, 'right');
  disableSquareListener(square, 'right');
  checkForGameOver();
  console.log('enemy attacked at: ', x, ' and ', y);
  if (!square.hasShip) {
    getAttacked();
  }
}

function disableSquareListener(square, side) {
  let queryClass;
  if (side === 'right') {
    queryClass = `.right-side .id${square.id}`;
  } else {
    queryClass = `.left-side .id${square.id}`;
  }
  const el = document.querySelector(queryClass);
  el.removeEventListener('click', attackEnemy);
  el.removeEventListener('mouseover', highlightAttack);
}

function getAttacked(xCoord, yCoord) {
  let x;
  let y;
  let square;
  let i = 0;
  while (i < 100000) {
    x = xCoord || randomInt(10);
    y = yCoord || randomInt(10);
    square = myBoard.getSquare(x, y);
    if (square) {
      if (!square.attacked) {
        break;
      }
    }
    xCoord = null;
    yCoord = null;
    i++;
  }
  myBoard.attackSquare(x, y);
  uiController.hitSquare(square, 'left');
  disableSquareListener(square, 'left');
  checkForGameOver();
  // this is where enemy attacks again if it was a hit;
  // it will attempt to hit nearby
  if (square.hasShip) {
    if (randomInt(2) - 1) {
      randomInt(2) - 1 ? getAttacked(x + 1, y) : getAttacked(x, y + 1);
    } else {
      randomInt(2) - 1 ? getAttacked(x - 1, y) : getAttacked(x, y - 1);
    }
  }
}

function checkForGameOver() {
  if (myBoard.checkIfAllSunk()) {
    removeListenersFromEnemyBoard();
    uiController.displayGameOver('You lose! \n Refresh to play again');
  }
  if (enemyBoard.checkIfAllSunk()) {
    removeListenersFromEnemyBoard();
    uiController.displayGameOver('You win! \n Refresh to play again');
  }
}

function startGame() {
  document.querySelector('.instructions').textContent = 'Good luck!';
  addListenersToEnemyBoard();
}
