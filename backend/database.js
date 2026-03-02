const mongoose=require("mongoose")

const dbConnect=async()=>{
   await mongoose.connect("mongodb+srv://shravanibodare_db_user:l8eg8HBQiSMaFwRU@diploma.gm6tyx6.mongodb.net/?appName=Diploma")
   .then(()=>{
        console.log("Database Connected");
        
    }).catch((err)=>{
        console.log(err);
        
    })
}

module.exports=dbConnect;