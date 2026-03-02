const express=require("express");
const dbConnect=require("./database");
const port=8000;

dbConnect();

const app=express();

app.get("/",(req,res)=>{
    res.send("BookMangement backend is running");
    
})

app.listen(port,()=>{
    console.log(`server is listening to port ${port}`);
})


console.log("Running");
