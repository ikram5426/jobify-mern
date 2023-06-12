import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import PageNotFound from "./middleware/pageNotFound.js";
import errorHandler from "./middleware/errorHandler.js";
import connectDb from "./db/connect.js";
import authRouter from "./routes/authRouter.js";
import jobsRouter from "./routes/jobsRouter.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome from Server Side");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

connectDb();

app.use(PageNotFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server start on port ${PORT} `);
});
