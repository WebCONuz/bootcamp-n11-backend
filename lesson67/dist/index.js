var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import routes from "./routes/index.routes.js";
import { sequelize } from "./db/index.js";
const app = express();
app.use(express.json());
app.use("/api", routes);
const PORT = process.env.PORT || 3051;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        yield sequelize.sync();
        console.log(`Server DB ga ulandi`);
    }
    catch (error) {
        console.log(error);
    }
    app.listen(PORT, () => {
        console.log(`Server ${PORT}-portda ishga tushdi`);
    });
});
start();
//# sourceMappingURL=index.js.map