// // import { useState } from "react";

// // function DeleteBook() {

// //   const [title, setTitle] = useState("");

// //   const handleDelete = (e) => {
// //     e.preventDefault();

// //     let books = JSON.parse(localStorage.getItem("books")) || [];

// //     const updatedBooks = books.filter(
// //       (book) => book.BookTitle.toLowerCase() !== title.toLowerCase()
// //     );

// //     if (books.length === updatedBooks.length) {
// //       alert("Book not found");
// //     } else {
// //       localStorage.setItem("books", JSON.stringify(updatedBooks));
// //       alert("Book deleted successfully");
// //     }

// //     setTitle("");
// //   };


// // function DeleteBook() {

// //   const [Id, setId] = useState("");

// //   const handleDelete = async (e) => {
// //     e.preventDefault();

// //     try {

// //       const res = await axios.delete(
// //         "http://localhost:8000/book/deletebook",
// //         {
// //           data: { Id }
// //         }
// //       );

// //       alert(res.data.Message);

// //       setId("");

// //     } catch (err) {

// //       console.log(err);
// //       alert("Error deleting book");

// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-sky-100 flex items-center justify-center">

// //       <div className="bg-white p-10 rounded-xl shadow-lg w-96">

// //         <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
// //           Delete Book
// //         </h2>

// //         <form onSubmit={handleDelete} className="space-y-4">

// //           <input
// //             type="text"
// //             placeholder="Enter Book Title"
// //             className="w-full p-2 border rounded"
// //             value={title}
// //             onChange={(e)=>setTitle(e.target.value)}
// //             required
// //           />

// //           <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
// //             Delete Book
// //           </button>

// //         </form>

// //       </div>

// //     </div>
// //   );
// // }

// // export default DeleteBook;


import { useState } from "react";
import axios from "axios";

function DeleteBook() {

  const [Id, setId] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.delete(
        `http://localhost:8000/book/deletebook/${Id}`
      );

      alert(res.data.Message);

      setId("");

    } catch (err) {

      console.log(err);
      alert("Error deleting book");

    }
  };

  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center">

      <div className="bg-white p-10 rounded-xl shadow-lg w-96">

        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
          Delete Book
        </h2>

        <form onSubmit={handleDelete} className="space-y-4">

          <input
            type="text"
            placeholder="Enter Book ID"
            className="w-full p-2 border rounded"
            value={Id}
            onChange={(e)=>setId(e.target.value)}
            required
          />

          <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
            Delete Book
          </button>

        </form>

      </div>

    </div>
  );
}

export default DeleteBook;