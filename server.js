import express from "express";
import mongoose from "mongoose";
import bodyparser from "express";
import contactRouter from "./routes/contact.js";

const app = express();

app.use(bodyparser.json());

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
