// const Ship = require('../src/Ship');
import Ship from '../src/Ship';

test('ship creation on correct length', () => {
  console.log(Ship);
  const newShip = Ship(5);
  expect(newShip.length).toBe(5);
});
