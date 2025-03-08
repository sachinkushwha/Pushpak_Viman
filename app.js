const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  console.log("First");
  // res.sendFile(path.join(__dirname, "views", "Home.html"));
  res.render("Home");
});

app.get("/Contact-Us", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "Contact.html"));
});

app.post("/Contact-Us", (req, res, next) => {
  console.log("Received Form Data:", req.body); // Log received data
  res.redirect("/thank-you");
});

app.get("/thank-you", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "Registered.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
