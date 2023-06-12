import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the name!"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide the email!"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email!",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide the password!"],
    minlength: 3,
  },
  lastName: {
    type: String,
    default: "lastName",
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  location: {
    type: String,
    default: "Karachi",
    maxlength: 20,
    trim: true,
  },
});

export default mongoose.model("User", userSchema);
