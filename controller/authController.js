import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !password || !email) {
    throw new badRequestError("Please provide all values");
  }
  const user = await User.create({ name, email, password });

const isUserExist=await User.findOne({email})

if(isUserExist){
    throw new BadRequestError('User already exist')
}
  res.status(StatusCodes.CREATED).json({ user });
};
 
const login = async (req, res) => {
  res.send("login user");
};

const updateUser = async (req, res) => {
  res.send("updateUser");
};

export { register, login, updateUser };
