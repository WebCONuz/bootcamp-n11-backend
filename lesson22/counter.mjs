let count = 0;
export const increaseM = () => ++count;
export const getCountM = () => console.log(count);
export const resetM = () => {
  count = 0;
  return count;
};

// export default {
//   increaseM,
//   getCountM,
//   resetM,
// };
