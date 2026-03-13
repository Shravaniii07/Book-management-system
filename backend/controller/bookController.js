const book= require("../model/book");


const handleBookController=async(req,res)=>{
    // console.log(1);
    try{
    const data=req.body;
    console.log(data);


    if(!data.BookTitle || !data.BookAuthor || !data.PublishDate || !data.Price ){
          return res.status(400).json({message:"All fields are required", Success:false})
    }

    // const bookdata=await book.insertOne(data);
    const bookdata=await book.create(data);

    // console.log(2);

    if(bookdata){
        return res.status(200).json({message:"book Added Succesfully", Success:true, book:bookdata})
    }
    }
    catch(err){
        return res.status(500).json({message:err.message, Success:false})

    }
}

//get all books
const handleBookListController=async(req,res)=>{
    try{
        console.log(1);
        
        const booklist=await book.find({});
        if(booklist){
            return res.status(200).json({Message:"book Added Succesfully", Sucess:true,
                BookList:booklist,TotalBooks:booklist.length})
        }
        return res.status(400).json({Message:"details not fetched", Sucess:false})
    }
    catch(err){
        console.log(2);
        return res.status(500).json({Message:err.message, Sucess:false})
        
    }
    }

    // find one

    const handleFindBookController=async(req,res)=>{
        try{
        const data=req.body;
        console.log(data);
        
        const b=await  book.findOne({_id:data.Id});

        //book is model class
        //deleting book through id
        // book.deleteOne({_id:data.Id});
        // postman :delete
        console.log(b);
        

  if(b){
            return res.status(200).json({Message:"book details fetched", Sucess:true,
                Book:b})
        }
        return res.status(500).json({Message:"details not found", Sucess:false})
        }
        catch(err){
           return res.status(500).json({Message:err.message, Sucess:false}) 
        }
    }


//      const handleDeleteBookController=async(req,res)=>{
//         try{
//         const data=req.body;
//         const d=await book.deleteOne({_id:data.Id});
        
        

//   if(d){
//             return res.status(200).json({Message:"book deleted", Sucess:true,
//                 Delete:d})
//         }
//         return res.status(500).json({Message:"details not found", Sucess:false})
//         }
//         catch(err){
//            return res.status(500).json({Message:err.message, Sucess:false}) 
//         }
//     }


const handleDeleteBookController = async (req, res) => {
  try {

    const Id = req.params.Id;

    const d = await book.deleteOne({ _id: Id });

    if (d.deletedCount > 0) {
      return res.status(200).json({
        Message: "Book deleted successfully",
        Success: true
      });
    }

    return res.status(404).json({
      Message: "Book not found",
      Success: false
    });

  } catch (err) {
    return res.status(500).json({
      Message: err.message,
      Success: false
    });
  }
};


    const handleUpdateBookController = async (req, res) => {
    try {

        const data = req.body;

        const d = await book.updateOne(
            { _id: data.Id },      // find by id
            { $set: data }         // update data
        );

        if (d.modifiedCount > 0) {
            return res.status(200).json({
                Message: "Book Updated",
                Sucess: true,
                Update: d
            });
        }

        return res.status(400).json({
            Message: "Book not found",
            Sucess: false
        });

    } catch (err) {
        return res.status(500).json({
            Message: err.message,
            Sucess: false
        });
    }
};

module.exports={handleBookController, handleBookListController, handleFindBookController,handleDeleteBookController, handleUpdateBookController}