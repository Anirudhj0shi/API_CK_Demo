import express from "express";
import mongoose from "mongoose";
import bodyparser from "express";
import contactRouter from "./routes/contact.js";
import cors from 'cors'

const app = express();

app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

mongoose
  .connect(
    "mongodb+srv://sumanmalakar2022:G7VwOsxTULrhE9SR@volcanus.tkilonf.mongodb.net/",
    {
      dbName: "MERN_Project_Contact_keeper",
    }
  )
  .then(() => console.log("MongoDB Connected..!"));

// contact router
app.use("/api", contactRouter);

app.get("/", (req, res) => {
  res.json({ message: "This is home route" });
});

const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));
