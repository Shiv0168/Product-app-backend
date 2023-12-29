import express from "express";
import DBConnection from "./Config/DBConnection.js";
import dotenv from "dotenv";
import router from "./Routes/product.route.js";
import morgan from "morgan";
import cors from "cors";

// for log
const logger = morgan;

// for reading env variables
dotenv.config();

const app = express();

// database connections
DBConnection();

// port
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(logger("dev"));

// routes for app
app.use("/api/v1/product", router);

app.listen(port, () => {
  console.log(`APP LISTEN ON PORT ${port}`);
});
