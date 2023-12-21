import express from "express";
import mongoose from "mongoose";
import bodyparser from "express";
import { Contact } from "./Models/contact.js";

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

// @route - '/addcontact'
// @method - 'post'
app.post("/addcontact", async (req, res) => {
  // console.log("addcontact is working");
  // console.log(req.body)

  const { name, gmail, phone, ctype } = req.body;

  let contact = await Contact.findOne({ gmail });
  let phoneNumber = await Contact.findOne({ phone });

  if (contact || phoneNumber)
    return res.json({ message: "Contact Already Exist..!" });

  contact = await Contact.create({
    name,
    gmail,
    phone,
    ctype,
  });

  res.json({ message: "Contact Saved..!" });
});

// @route - '/getcontacts'
// @method - 'get'
app.get("/getcontacts", async (req, res) => {
  const contacts = await Contact.find();

  res.json({ message: "fetched all contacts", contacts });
});

// @route - '/:id'
// @method - put
app.put("/:id", async (req, res) => {
  // console.log(req.params.id);
  const contactId = req.params.id;

  let contact = await Contact.findById(contactId);

  if (!contact) return res.json({ message: "Invalid Id" });

  const { name, gmail, phone, ctype } = req.body;

  contact.name = name;
  contact.gmail = gmail;  
  contact.phone = phone;
  contact.ctype = ctype;

  await contact.save();
  res.json({ contact });
});

const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));
