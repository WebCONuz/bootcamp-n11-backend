import path from "path";

function logPath(show) {
  if (show) {
    console.log(Object.keys(path));

    console.log("FileName2: ", path.basename("C:\\hodedir\\app.html"));
    console.log("FileName3: ", path.basename("C:/hodedir/app.html"));
    /* Linux, Unix, Mac oilasidagi OS lar posix deb ataladi */
    console.log("FileName4: ", path.posix.basename("C:/hodedir/app.html"));
    /* Windows oilasidagi OS lar win32 deb ataladi */
    console.log("FileName5: ", path.win32.basename("C:/hodedir/app.html"));
    console.log("DirName: ", path.dirname("C:/hodedir/app.html"));
    console.log("Extension: ", path.extname("C:/hodedir/main.js"));

    console.log(
      "Path: ",
      path.format({
        root: "D:\\",
        dir: "D:\\node.js\\23-dars. Node.js 3-dars",
        base: "path.js",
        ext: ".js",
        name: "path",
      })
    );
    console.log(path.parse("C:/hodedir/main.js"));
    console.log(path.join("/home", "darslar", "index.html"));
    console.log(
      path.normalize("D:/node.js/23-dars. Node.js 3-dars/dir/../path.js")
    );
    console.log(
      path.relative(
        "D:/node.js/23-dars. Node.js 3-dars/path.js",
        "D:/node.js/23-dars. Node.js 3-dars/os.js"
      )
    );
    console.log(path.resolve("/home", "darslar/node", "dars1", "index.html"));
    console.log(path.resolve("home", "darslar", "dars1", "index.html"));
  } else {
    console.log("Path moduli ishlab turibdi");
  }
}

export default logPath;
