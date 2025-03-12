const express = require("express");
const userController=require('../controllers/user');
const userRoutes = express.Router();


userRoutes.get('/',userController.getHome);
userRoutes.get("/Contact-Us",userController.getContectus);
userRoutes.get("/Add-Vehicle",userController.getAddVechicals); 
userRoutes.post("/Add-Vehicle",userController.postAddVechicals);
userRoutes.post("/Update-Vehicle",userController.postUpdateVachicals);

module.exports = userRoutes;
