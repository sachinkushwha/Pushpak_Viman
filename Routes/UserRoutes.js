const express = require("express");

const Routes = express.Router();

Routes.get("/Contact-Us", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "views", "Contact.html"));
  res.render("Contact");
});

Routes.get("/Add-Vehicle", (req, res, next) => {
  res.render("Add_Vehicle");
});

const Vehicle_Added = [];
Routes.post("/Add-Vehicle", (req, res, next) => {
  Vehicle_Added.push(req.body);
  console.log(Vehicle_Added);
 res.redirect('/');
});
Routes.get("/", (req, res, next) => {
  console.log("First");
  res.render("Home",{Vehicle_Added:Vehicle_Added});
});

module.exports = Routes;
