import fs from "fs";
import path from "path";
import zlib from "zlib";

export function readLogStream(show) {
  if (show) {
    const filePath = path.join(process.env.pwd, "modules", "test.txt");
    const readStream = fs.createReadStream(filePath);

    readStream.on("data", (content) => {
      console.log(content);
      //   console.log(content.toString());
    });
  } else {
    console.log("Read Stream module ishlab turibdi");
  }
}

export function writeLogStream(show) {
  if (show) {
    const filePath = path.join(process.env.pwd, "modules", "write.txt");
    const writeStream = fs.createWriteStream(filePath);
    writeStream.write("Write Data");
    console.log("Ma'lumot yozildi");
  } else {
    console.log("Write Stream module ishlab turibdi");
  }
}

export function duplexLogStream(show) {
  if (show) {
    const errorHandler = () => {
      console.log("Error");
      readStream.destroy();
      writeStream.destroy();
    };
    const filePath1 = path.join(process.env.pwd, "modules", "test.txt");
    const filePath2 = path.join(process.env.pwd, "modules", "write.txt");
    const readStream = fs.createReadStream(filePath1);
    const writeStream = fs.createWriteStream(filePath2);
    readStream.on("error", errorHandler).pipe(writeStream);
  } else {
    console.log("Duplex Stream module ishlab turibdi");
  }
}

export function transformLogStream(show) {
  if (show) {
    const errorHandler = () => {
      console.log("Error");
      readStream.destroy();
      writeStream.destroy();
    };
    const filePath1 = path.join(process.env.pwd, "modules", "test.txt");
    const filePath2 = path.join(process.env.pwd, "modules", "write.txt");
    const readStream = fs.createReadStream(filePath1);
    const writeStream = fs.createWriteStream(filePath2);

    const compressStream = zlib.createGzip();
    readStream
      .on("error", errorHandler)
      .pipe(compressStream)
      .pipe(writeStream)
      .on("error", errorHandler);
  } else {
    console.log("Transform Stream module ishlab turibdi");
  }
}
