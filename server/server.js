import express from "express";
import get from "./Controllers/get.js";
import mongoose from "mongoose";
import Post from "./Controllers/Post.js";
import cors from "cors";
import createDriver from "./Controllers/createUser.js";
import availDriver from "./Controllers/availDriver.js";
import createpolice from "./Controllers/policeStation.js";
import calculateIntensity from "./Controllers/calculateIntensity.js";
const app = express();
const PORT = 5000;

// Increase the limit to 50mb for JSON data
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(cors());
app.get("/", get);
app.get("/getdriver/:location", availDriver);
app.post("/", Post);
app.post("/createuser", createDriver);
app.post("/createpolice", createpolice);
app.post("/intensity", calculateIntensity);
mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("database connected");
    app.listen(PORT, () => {
      console.log("http://localhost:" + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
