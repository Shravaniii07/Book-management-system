const express=require("express");
const { handleBookController, handleBookListController, handleFindBookController, handleDeleteBookController, handleUpdateBookController } = require("../controller/bookController");


const router=express.Router();

router.get("/",(req,res)=>{
    res.send("routing on book router page")
});

//addbook-- titke author
router.post("/add",handleBookController);

// getallbooks
router.get("/getbooks",handleBookListController)

//getbook
router.get("/findbook",handleFindBookController);

//delete
// router.delete("/deletebook",handleDeleteBookController);
router.delete("/deletebook/:Id",handleDeleteBookController);
// router.delete("/deletebook/:Id",handleDeleteBookController);

// update
router.put("/updatebook",handleUpdateBookController);
module.exports=router;

//homepage addbook-form and fields as book.js
// displau book - 5 static findbook 
// 