//connect creates server

const express=require("express");
const dbConnect=require("./database");

const router=require("./routes/bookRoute");
const port=8000;

dbConnect();

const app=express();

const cors = require("cors");
app.use(cors()); // enable all origins

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("BookMangement backend is running");
    
})

app.use("/book", router)
//connect router page using routes

app.listen(port,()=>{
    console.log(`server is listening to port ${port}`);
})


console.log("Running");
