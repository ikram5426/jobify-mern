import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";
import { BadRequestError } from "../error/index.js";

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !password || !email) {
    throw new BadRequestError("Please provide all values");
  }

  const isUserExist = await User.findOne({ email });

  if (isUserExist) {
    throw new BadRequestError("User already exist");
  }
  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({
      user: {
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        location: user.location,
      },
      token,
    });
};

const login = async (req, res) => {
  res.send("login user");
};

const updateUser = async (req, res) => {
  res.send("updateUser");
};

export { register, login, updateUser };
