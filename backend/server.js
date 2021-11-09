//common js to esmodule conversion will take place
import express, { application } from "express";
import dotenv from "dotenv";
//used to add colors to terminal outputs, totally optional
import colors from "colors";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import productRoutes from "./routes/productRoutes.js";

//this should come before connectDB for sure;
//very very important guys
dotenv.config();
connectDB();

//connect to database atlast for the best work
//on machine, or whatever you wanna do
const app = express();

//simple backend server for the user to understand
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);

//environment variable use is pretty cool for sure
//definelty look into that for sure
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
