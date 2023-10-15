const Ship = (length) => {
  // this if statement makes sure we get an appropriate ship length
  if (!Number.isInteger(length) || length > 5 || length <= 0) {
    console.log(`Error: Can't create ship. Length is ${length}`);
  }
  const hits = 0;
  const sunk = false;
  function hit() {
    this.hits += 1;
    if (this.hits === length) { this.sunk = true; }
  }
  return {
    hits,
    length,
    sunk,
    hit,
    orientation: 'horizontal',
  };
};

export default Ship;
