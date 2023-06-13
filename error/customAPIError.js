import { StatusCodes } from "http-status-codes";

class customAPIError extends Error {
  constructor(message) {
    super(message);
  }
}

export default customAPIError;
