import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import todoRoute from "./routes/todo.route.js";


import cors from "cors";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

app.use(cors({ origin: "http://localhost:3001", credentials: true }));
app.use(express.json());


app.use("/api/todos", todoRoute);
app.use("/get", (req, res) => {

    res.json("Hello")
})

app.listen(5000, () => {
  connect();
  console.log("Backend server is running!");
});
