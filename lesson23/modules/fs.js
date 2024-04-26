import fs from "fs";
import path from "path";

function logFs(show) {
  if (show) {
    // ---------------- File yaratish uchun path yaratish ------------
    const filePath = path.join(process.env.pwd, "modules", "index.txt");

    // -------------------------- File yaratish ----------------------
    //   fs.writeFile(filePath, "Hello node content!", function (err) {
    //     if (err) throw err;
    //     console.log("Saved");
    //   });

    fs.appendFile(filePath, "\nHello content!", function (err) {
      if (err) throw err;
      console.log("Saved");
    });

    // --------------------- File nomini o'zgartirish -----------------

    // const filePath2 = path.join(process.env.pwd, "modules", "test.txt");
    // fs.rename(filePath, filePath2, function (err) {
    //   if (err) throw err;
    //   console.log("File is renamed");
    // });

    // -------------------------- File o'chirish ----------------------

    // fs.unlink(filePath, function (err) {
    //   if (err) throw err;
    //   console.log("File is deleted");
    // });

    // fs.rm(filePath, function (err) {
    //   if (err) throw err;
    //   console.log("File is deleted");
    // });

    // ---------------------------- File o'qish -----------------------

    fs.readFile(filePath, "utf-8", function (err, data) {
      if (err) throw err;
      console.log(data);
    });
  } else {
    console.log("FS moduli ishlab turibdi");
  }
}

export default logFs;
