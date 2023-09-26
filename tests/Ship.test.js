import Ship from '../src/Ship';

test('ship creation on correct length', () => {
  const newShip = Ship(5);
  expect(newShip.length).toBe(5);
});

test('hit ship 1 time', () => {
  const newShip = Ship(5);
  newShip.hit();
  console.log(newShip.hit);
  expect(newShip.hits).toBe(1);
});

test('hit ship 3 times', () => {
  const newShip = Ship(5);
  newShip.hit();
  newShip.hit();
  newShip.hit();
  expect(newShip.hits).toBe(3);
});

test('sink ship', () => {
  const newShip = Ship(2);
  newShip.hit();
  newShip.hit();
  expect(newShip.sunk).toBeTruthy();
});

test('ship not sunk if not enought hits', () => {
  const newShip = Ship(3);
  newShip.hit();
  newShip.hit();
  expect(newShip.sunk).toBeFalsy();
});

test('throw an error on wrong attributes', () => {
  expect(() => { Ship(6); }).toThrow(Error);
  expect(() => { Ship(-3); }).toThrow(Error);
  expect(() => { Ship(0); }).toThrow(Error);
  expect(() => { Ship('sdf'); }).toThrow(Error);
});
