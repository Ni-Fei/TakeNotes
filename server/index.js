const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/UserModel");
const jwt = require("jsonwebtoken");
const Note = require("./models/NotesModel");


app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/take_notes");

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create({
      id: req.body.id /*can enter validation*/,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      dob: req.body.dob,
      mobile: req.body.mobile,
      status: req.body.status,
      username: req.body.username,
      password: req.body.password, /* must be encrypted.Couldn't complete */
      accType: req.body.accType,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate entry" });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        username: user.username,
        password: user.password,
      },
      "secret"
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.post("/api/insertNote", async (req, res) => {
  console.log(req.body);
  try {
    const note = await Note.create({
      id: req.body.id,
      title: req.body.title,
      body: req.body.noteContent,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "testerr" });
  }
});

app.get("/api/retrieveNote", async (req, res) => {
  console.log(req.body);
  try {
    const note = await Note.findOne({
      id: req.body.id,
    })
    
    return res.json ({status : "ok", title: note.title})

    
  } catch (err) {
    res.json({ status: "error", error: "testerr" });
  }
});

app.listen(1140, () => {
  console.log("Server started on 1140");
});
