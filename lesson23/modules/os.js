import os from "os";

function logOs(show) {
  if (show) {
    console.log(Object.keys(os));

    console.log("Host: ", os.hostname());
    console.log("OS: ", os.platform());
    console.log("Homedir: ", os.homedir());
    console.log("proc: ", os.cpus());
    console.log("FreeMem: ", os.freemem());
    console.log("TotalMem: ", os.totalmem());
    console.log("Temp: ", os.tmpdir());
    console.log("Vaqt: ", os.uptime());
    console.log("network: ", os.networkInterfaces());
  } else {
    console.log("OS moduli ishlab turibdi");
  }
}

export default logOs;
