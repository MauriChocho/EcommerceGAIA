const fs = require("fs");
const path=require("path");


const userContoller={

contact: (req,res)=>{
   return  res.render("user/contact");
}

}


module.exports= userContoller;