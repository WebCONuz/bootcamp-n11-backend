// let count = 0;

// const increase = () => count++;
// const getCount = () => console.log(count);
// const reset = () => {
//   count = 0;
//   console.log("Count reset qilindi");
// };

// // increase(); // count: 1
// // getCount(); // 1
// // reset(); // count: 0 => "Count reset qilindi"

// // -----------------------------------------------------------------------
// // IIFE Pattern ----------------------------------------------------------
// // -----------------------------------------------------------------------
const iifeCounterModule = (() => {
  let count = 0;
  return {
    increase: () => count++,
    getCount: () => console.log(count),
    reset: () => {
      count = 0;
      console.log("Count reset qilindi");
    },
  };
})();

iifeCounterModule.increase(); // count: 1
iifeCounterModule.getCount(); // 1
iifeCounterModule.reset(); // count: 0 => "Count reset qilindi"

// // -----------------------------------------------------------------------
// // Open Module Pattern ---------------------------------------------------
// // -----------------------------------------------------------------------
// const openCounterModule = (() => {
//   let count = 0;
//   const increase = () => count++;
//   const getCount = () => console.log(count);
//   const reset = () => {
//     count = 0;
//     console.log("Count reset qilindi");
//   };
//   return {
//     increase,
//     getCount,
//     reset,
//   };
// })();

// // openCounterModule.increase(); // count: 1
// // openCounterModule.getCount(); // 1
// // openCounterModule.reset(); // count: 0 => "Count reset qilindi"

// // -----------------------------------------------------------------------
// // Singleton Module Pattern ----------------------------------------------
// // -----------------------------------------------------------------------

// const singletonCounterModule = (() => {
//   let count = 0;
//   let instance;

//   const increase = () => ++count;
//   const getCount = () => console.log(count);
//   const reset = () => {
//     count = 0;
//     return "Reset qilindi";
//   };

//   const createInstance = () => {
//     return {
//       increase,
//       getCount,
//       reset,
//     };
//   };
//   return {
//     getInstance: () => {
//       return instance || (instance = createInstance());
//     },
//   };
// })();
// // singletonCounterModule.getInstance().increase();
// // singletonCounterModule.getInstance().increase();
// // singletonCounterModule.getInstance().getCount();

// // -----------------------------------------------------------------------
// // Global Objects --------------------------------------------------------
// // -----------------------------------------------------------------------

// console.log(global);
// console.log(process);
// console.log(process.argv);
// console.log(process.env);
console.log(process.env.pwd);
// console.log(process.arch);
// console.log(process.platform);
// console.log(process.version);
console.log(__dirname);
console.log(__filename);
// console.log(module);
// console.log(URL);
// setTimeout(() => {
//   console.log("++++++++++++++");
// }, 3000);

// // -----------------------------------------------------------------------
// // URL Class -------------------------------------------------------------
// // -----------------------------------------------------------------------

const url = new URL("https://najottalim.uz");
// url.searchParams.set("frontend course", "react");
// url.searchParams.set("backend course", "express");
// console.log(url.searchParams.get("backend course"));
console.log(url);

// // -----------------------------------------------------------------------
// // Operation System module -----------------------------------------------
// // -----------------------------------------------------------------------

// const os = require("os");

// console.log("Hostname:", os.hostname());
// console.log("Platform:", os.platform());
// console.log("Homedir:", os.homedir());
// console.log("Arxitektura:", os.arch());
// // console.log("Yadrolar:", os.cpus());
// console.log("Total memory:", os.totalmem());
// console.log("Free memory:", os.freemem());
