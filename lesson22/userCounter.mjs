import { increaseM, getCountM, resetM } from "./counter.mjs";

resetM();
increaseM();
getCountM();

// import("./counter.mjs").then(({ increaseM, getCountM, resetM }) => {
//   resetM();
//   increaseM();
//   getCountM();
// });

// import("./counter.mjs").then(({ counterFN }) => {
//   counterFN.resetM();
//   counterFN.increaseM();
//   counterFN.getCountM();
// });
