import { StatusCodes } from "http-status-codes";
import customAPIError from "./customAPIError.js";

class customAPIError extends Error {
  constructor(message) {
    super(message);
  }
}

export default customAPIError;
