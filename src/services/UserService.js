import mongoose from "mongoose";
import { User } from "../models/User.js";
import { createEmployee } from "./EmployeeService.js";
import jwt from "jsonwebtoken";

export const createUser = async (employee) => {
  const { user } = employee;
  user._id = new mongoose.Types.ObjectId();
  const em = await createEmployee(employee);
  user.employee = em._id;
  const userSave = new User(user);
  userSave.password = await userSave.encryptPassword(userSave.password);
  userSave
    .save()
    .then(() => {
      return employee.user._id;
    })
    .catch((err) => {
      console.log(err);
      return new Error();
    });
};

export const getUsers = async () => {
  return await User.find({})
    .populate({
      path: "employee",
      populate: {
        path: "procedure",
      },
    })
    .exec();
};

const getUserByUsername = async (username) => {
  return await User.findOne({ username: username })
    .populate({
      path: "employee",
      populate: {
        path: "procedure",
      },
    })
    .exec();
};

export const login = async (user) => {
  const EXPIRATION_HOURS = 10;
  const u = await getUserByUsername(user.username);
  const success = await u.matchPassword(user.password);
  if (success) {
    const secret = process.env.secret;
    const token = jwt.sign(
      {
        user: { username: u.username },
        exp: Date.now() + EXPIRATION_HOURS * 60 * 1000,
      },
      secret
    );
    return token;
  } else return success;
};

export const verifyToken = async (token) => {
  const secret = process.env.secret;
  const now = Date.now();
  const tokenRes = jwt.verify(token, secret);
  const { user } = tokenRes;
  const { username, role, employee } = await getUserByUsername(user.username);
  if (tokenRes.exp > now) return { username, role, employee };
  return null;
};
