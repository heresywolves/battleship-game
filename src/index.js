import './style.css';
import Ship from './Ship';
import GameBoard from './GameBoard';
import uiController from './uiController';

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
  const x = +xString.split(':')[1];
  const y = +yString.split(':')[1];
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

function highlightShipPlacement() {
  console.log('event tracking active');
  const nextShipArr = myBoard.shipsToPlace;
  const shipSize = nextShipArr[0];
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

function highlightAttack() {
  console.log('enemy board tracking mouse');
}

function attackEnemy() {
  console.log('enemy attacked');
}

function startGame() {
  addListenersToEnemyBoard();
}
