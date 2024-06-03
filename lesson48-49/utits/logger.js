import { createLogger, format, transports } from "winston";
import { MongoDB } from "winston-mongodb";
import dotenv from "dotenv";
dotenv.config();

const { combine, timestamp, printf, prettyPrint } = format;
const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(timestamp(), myFormat),
  transports: [
    new transports.Console({ level: "debug" }),
    new transports.File({ filename: "logs/errors.log", level: "error" }),
    new transports.File({ filename: "logs/combined.log", level: "info" }),
    new transports.MongoDB({
      db: process.env.DB_URL,
      level: "info",
      collection: "logs",
      options: {
        useUnifiedTopology: true,
      },
    }),
  ],
  exceptionHandlers: [new transports.File({ filename: "logs/exceptions.log" })],
  rejectionHandlers: [new transports.File({ filename: "logs/rejections.log" })],
});

export default logger;
