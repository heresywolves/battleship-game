const Id = (() => {
  const usedId = [];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  function getNewId() {
    let id = String(getRandomInt(1000));
    while (usedId.includes(id)) {
      id = String(getRandomInt(1000));
    }
    usedId.push(id);
    return id;
  }
  return {
    getNewId,
  };
})();

export default Id;
