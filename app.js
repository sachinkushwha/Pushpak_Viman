// ye hai core module and required resources
const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;

//Ye hai local module
const UserRoutes = require("./Routes/UserRoutes");
const HostRouter = require("./Routes/HostRoutes");

app.set("view engine", "ejs");
app.set("views", "views");
// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.use(UserRoutes); // Contact Us Page khulta hai

app.use(HostRouter); // Isse Data same path par submit hota hai and thank you page par redirect hota hai

app.get("/thank-you", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "Registered.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
