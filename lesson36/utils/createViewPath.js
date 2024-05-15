import path from "path";

// get url function
const __dirname = import.meta.dirname;
const createViewPath = (page) => {
  const filePath = path.resolve(__dirname, "../views", `${page}.ejs`);
  return filePath;
};

export default createViewPath;
