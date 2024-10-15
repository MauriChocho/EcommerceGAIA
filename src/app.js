const express= require("express");
const app= express();
const path= require("path");
const fs= require("fs")

app.use(express.static(path.join(__dirname,"../public")));
app.set("views",  path.join(__dirname,"views"));
app.set("view engine", "ejs");





const mainRouter= require("./routes/mainRouter.js");

const productRouter= require("./routes/productRouter.js");

const userRouter= require("./routes/userRouter.js");




app.use("/",mainRouter);

app.use("/",productRouter);


app.use("/",userRouter);



app.listen(8000,()=> console.log("Servidor en puerto 8000"));
