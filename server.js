import express from "express";
import mongoose from "mongoose";
import bodyparser from "express";
import contactRouter from "./routes/contact.js";
import cors from 'cors'
import {config }from 'dotenv'

const app = express();

config({
  path:'.env'
})

app.use(bodyparser.json());
app.use(
  cors({
    origin: process.env.Frontend_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
 
mongoose
  .connect(process.env.Mongo_URL, {
    dbName: "MERN_Project_Contact_keeper",
  })
  .then(() => console.log("MongoDB Connected..!"));

// contact router
app.use("/api", contactRouter);

app.get("/", (req, res) => {
  res.json({ message: "This is home route" });
});

const port = process.env.Port;
app.listen(port, () => console.log(`server is running on port ${port}`));
