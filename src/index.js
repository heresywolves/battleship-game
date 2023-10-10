import './style.css';
import Ship from './Ship';
import GameBoard from './GameBoard';
import uiController from './uiController';

const myBoard = GameBoard();
myBoard.setName('my');

const enemyBoard = GameBoard();
enemyBoard.setName('enemy');

uiController.drawBoard(myBoard);
