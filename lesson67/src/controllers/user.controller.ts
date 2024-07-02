import { Request, Response } from "express";
import User from "../models/user.model.js";

export const getUsers = async (req: Request, res: Response) => {
  try {
    console.log("++++++++");

    const data: any = await User.findAll();
    console.log("++", data);

    res.status(200).json({ status: "OK", data: data });
  } catch (err) {
    console.log(err);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ status: "OK" });
  } catch (err) {
    console.log(err);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ status: "OK" });
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ status: "OK" });
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ status: "OK" });
  } catch (err) {
    console.log(err);
  }
};
