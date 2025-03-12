const express = require("express");
const fs = require("fs");
const path = require("path");
const hostController=require("../controllers/host")
const Host_Router = express.Router();
const DetailAdded = [];
// yha se contact page ka data file m store kiyta jaa rha hai ....
Host_Router.post("/Contact-Us", (req, res, next) => {
  console.log("Received Form Data:", req.body);

  const filePath = path.join(__dirname, "Detail.txt");
  const formData = JSON.stringify(req.body, null, 2); // Formatting for readability
  DetailAdded.push(formData);
  console.log(DetailAdded);

  fs.writeFile(filePath, formData, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return res.status(500).send("Internal Server Error");
    }
    res.redirect("/thank-you");
  });
});
// ........................................//
Host_Router.get("/home",hostController.getHome);
Host_Router.get('/host-update/:carid',hostController.getCarUpdate)
module.exports = Host_Router;
