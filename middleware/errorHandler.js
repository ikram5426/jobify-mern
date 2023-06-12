import { StatusCodes } from "http-status-codes";

const errorHandler = (err, req, res, next) => {
  console.log(err);
  const defaultError = {
    StatusCodes:err.StatusCodes||  StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong , Try again later!",
  };
  if (err.name === "ValidationError") {
    defaultError.StatusCodes = StatusCodes.BAD_REQUEST;
    defaultError.msg = Object.values(err.errors).map((item)=>item.message).join(',')
  }
  if(err.code && err.code===11000){
    defaultError.StatusCodes = StatusCodes.BAD_REQUEST;
defaultError.msg=`${Object.keys(err.keyValue)} field has to be unique.`
  }
  res.status(defaultError.StatusCodes).json({ msg: defaultError.msg });
  // res.status(defaultError.StatusCodes).json({ msg: err });
};

export default errorHandler;
