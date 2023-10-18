import Ship from '../src/Ship';

let newShip;

beforeEach(() => {
  newShip = Ship(3);
});

test('ship creation on correct length', () => {
  expect(newShip.length).toBe(3);
});

test('hit ship 1 time', () => {
  newShip.hit();
  expect(newShip.hits).toBe(1);
});

test('hit ship 2 times', () => {
  newShip.hit();
  newShip.hit();
  expect(newShip.hits).toBe(2);
});

test('sink ship', () => {
  newShip.hit();
  newShip.hit();
  newShip.hit();
  expect(newShip.sunk).toBeTruthy();
});

test('ship not sunk if not enought hits', () => {
  newShip.hit();
  newShip.hit();
  expect(newShip.sunk).toBeFalsy();
});

test('throw an error on wrong attributes', () => {
  expect(() => {
    Ship(6);
  }).toThrow(Error);
  expect(() => {
    Ship(-3);
  }).toThrow(Error);
  expect(() => {
    Ship(0);
  }).toThrow(Error);
  expect(() => {
    Ship('sdf');
  }).toThrow(Error);
});
