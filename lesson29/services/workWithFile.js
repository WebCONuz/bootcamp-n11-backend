import fs from "fs";

export function readFromFile(filePath) {
  try {
    let users = fs.readFile(filePath, "utf8");
    console.log("++", users);
    return JSON.parse(users);
  } catch (err) {
    return null;
  }
}

export function writeToFile(filePath, data) {
  try {
    const users = JSON.stringify(data);
    fs.writeFileSync(filePath, users);
    return;
  } catch (err) {
    return err;
  }
}
