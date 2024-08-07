const express=require("express");
const bodyparser=require("body-parser");
const App=express();
const Menumodels=require("./Models/Menumodels");
const Usermodels=require("./Models/Usermodels")
App.use(bodyparser.json());
App.use("/User",require("./Controlers/countroluser"));
App.use("/Menu",require("./Controlers/countrolmenu"));

module.exports=App;