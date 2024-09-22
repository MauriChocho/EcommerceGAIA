const express= require("express");
const app= express();
const path= require("path");

app.use(express.static(path.join(__dirname,"../public")));
app.set("views",  path.resolve(__dirname,"views"));
app.set("view engine", "ejs");





const mainRouter= require("./routes/mainRouter.js");



app.use("/",mainRouter);


app.listen(8000,()=> console.log("Servidor en puerto 8000"));
