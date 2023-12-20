import express from 'express'
import mongoose from 'mongoose';
import bodyparser from 'express'
import { Contact } from './Models/contact.js';


const app = express();

app.use(bodyparser.json());

mongoose.connect(
  "mongodb+srv://sumanmalakar2022:G7VwOsxTULrhE9SR@volcanus.tkilonf.mongodb.net/",{
    dbName:"MERN_Project_Contact_keeper"
  }
).then(()=>console.log("MongoDB Connected..!"));


// @route - '/addcontact'
// @method - 'post'
app.post('/addcontact', (req,res)=>{
    // console.log("addcontact is working");
    console.log(req.body)
})

// @route - '/getcontacts'
// @method - 'get'
app.get("/getcontacts", (req, res) => {
  console.log("getAllContacts is working");
});






const port = 3000;
app.listen(port, ()=>console.log(`server is running on port ${port}`))