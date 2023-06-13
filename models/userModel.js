import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs'
 import jwt from 'jsonwebtoken'

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
    select:false
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

userSchema.pre('save',async function(){
  const salt=await bcrypt.genSalt(10)
  this.password= bcrypt.hash(this.password,salt)
})


userSchema.methods.createJWT=function(){
  return jwt.sign({userId:this._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE})
}


export default mongoose.model("User", userSchema);
