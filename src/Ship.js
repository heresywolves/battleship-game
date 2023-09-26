const Ship = (length) => {
  // this if statement makes sure we get an appropriate ship length
  if (!Number.isInteger(length) || length > 5 || length <= 0) {
    throw new Error(`length argument in ship creation is incorrect: ${length}`);
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
  };
};

export default Ship;
