var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from "../models/user.model.js";
export const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("++++++++");
        const data = yield User.findAll();
        console.log("++", data);
        res.status(200).json({ status: "OK", data: data });
    }
    catch (err) {
        console.log(err);
    }
});
export const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({ status: "OK" });
    }
    catch (err) {
        console.log(err);
    }
});
export const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({ status: "OK" });
    }
    catch (err) {
        console.log(err);
    }
});
export const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({ status: "OK" });
    }
    catch (err) {
        console.log(err);
    }
});
export const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({ status: "OK" });
    }
    catch (err) {
        console.log(err);
    }
});
//# sourceMappingURL=user.controller.js.map