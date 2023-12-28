import express from "express";
import { Contact } from "../Models/contact.js";
import {
  addContact,
  getContacts,
  updateContact,
  deleteContact,
  getContactById,
} from "../controllers/contact.js";

const router = express.Router();

// home route
router.get("/home", (req, res) => {
  res.json({ message: "Converting to MVC Structure..!" });
});

router.post("/addcontact", addContact);

router.get("/getcontacts", getContacts);

router.put("/:id", updateContact);

router.delete("/:id", deleteContact);

router.get("/:id",getContactById)

export default router;
