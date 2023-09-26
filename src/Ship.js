const Ship = (length) => {
  let hits = 0;
  function hit() { hits++; }
  return {
    hits,
    length,
    sunk: false,
    hit,
  };
};

export default Ship;
