const Ship = (length) => {
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
