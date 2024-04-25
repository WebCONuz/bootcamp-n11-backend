let count = 0;
const increaseM = () => ++count;
const getCountM = () => console.log(count);
const resetM = () => {
  count = 0;
  return count;
};

exports.increaseM = increaseM;
exports.getCountM = getCountM;
exports.resetM = resetM;

module.exports = {
  increaseM,
  getCountM,
  resetM,
};
