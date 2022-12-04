const express = require("express");
const userModel = require("../models/userModel");

let router = express.Router();

router.post("/adduser", (req, res) => {
  console.log("/adduser : ", req.body);

  const user = req.body;
  const userOne = new userModel({
    firstName: req.body.firstName,
    lastName: user.lastName,
    email: user.email,
    Number: user.Number,
  });

  userOne
    .save()
    .then((data) => {
      console.log("DATA SAVED : ", data);
      return res.status(200).json({ data: "data stored.." });
    })
    .catch((e) => {
      return res.status(201).json({ data: "Error : ", e });
    });
});


module.exports = router;
