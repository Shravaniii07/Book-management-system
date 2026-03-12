import { useState } from "react";
import axios from "axios";

function AddBook() {
  const [book, setBook] = useState({
    BookTitle: "",
    BookAuthor: "",
    PublishDate: "",
    Price: "",
    Description: ""
  });

  // Update state dynamically for all inputs
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  // Submit form to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/book/add", book);
      alert(res.data.message); // backend must send { message: "Book added successfully" }

      // Clear form
      setBook({
        BookTitle: "",
        BookAuthor: "",
        PublishDate: "",
        Price: "",
        Description: ""
      });
    } catch (err) {
      console.log(err);
      alert("Error adding book. Check backend!");
    }
  };

  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-sky-700 mb-6">
          Add New Book
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Book Title */}
          <input
            type="text"
            name="BookTitle"
            placeholder="Book Title"
            className="w-full p-2 border rounded"
            value={book.BookTitle}
            onChange={handleChange}
            required
          />

          {/* Author */}
          <input
            type="text"
            name="BookAuthor"
            placeholder="Author Name"
            className="w-full p-2 border rounded"
            value={book.BookAuthor}
            onChange={handleChange}
            required
          />

          {/* Publish Date */}
          <input
            type="date"
            name="PublishDate"
            className="w-full p-2 border rounded"
            value={book.PublishDate}
            onChange={handleChange}
            required
          />

          {/* Price */}
          <input
            type="number"
            name="Price"
            placeholder="Price"
            className="w-full p-2 border rounded"
            value={book.Price}
            onChange={handleChange}
            required
          />

          {/* Description */}
          <textarea
            name="Description"
            placeholder="Book Description"
            className="w-full p-2 border rounded"
            value={book.Description}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600"
          >
            Add Book
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddBook;

// import { useState } from "react";

// function AddBook() {

//   const [book, setBook] = useState({
//     BookTitle: "",
//     BookAuthor: "",
//     PublishDate: "",
//     Price: "",
//     Description: ""
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let books = JSON.parse(localStorage.getItem("books")) || [];
//     books.push(book);

//     localStorage.setItem("books", JSON.stringify(books));

//     alert("Book Added Successfully");

//     setBook({
//       BookTitle: "",
//       BookAuthor: "",
//       PublishDate: "",
//       Price: "",
//       Description: ""
//     });
//   };

//   return (
//     <div className="min-h-screen bg-sky-100 flex items-center justify-center">

//       <div className="bg-white p-10 rounded-xl shadow-lg w-96">

//         <h2 className="text-2xl font-bold text-center text-sky-700 mb-6">
//           Add New Book
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">

//           {/* Book Title */}
//           <input
//             type="text"
//             placeholder="Book Title"
//             className="w-full p-2 border rounded"
//             value={book.BookTitle}
//             onChange={(e)=>setBook({...book,BookTitle:e.target.value})}
//             required
//           />

//           {/* Author */}
//           <input
//             type="text"
//             placeholder="Author Name"
//             className="w-full p-2 border rounded"
//             value={book.BookAuthor}
//             onChange={(e)=>setBook({...book,BookAuthor:e.target.value})}
//             required
//           />

//           {/* Publish Date */}
//           <input
//             type="date"
//             className="w-full p-2 border rounded"
//             value={book.PublishDate}
//             onChange={(e)=>setBook({...book,PublishDate:e.target.value})}
//             required
//           />

//           {/* Price */}
//           <input
//             type="number"
//             placeholder="Price"
//             className="w-full p-2 border rounded"
//             value={book.Price}
//             onChange={(e)=>setBook({...book,Price:e.target.value})}
//             required
//           />

//           {/* Description */}
//           <textarea
//             placeholder="Book Description"
//             className="w-full p-2 border rounded"
//             value={book.Description}
//             onChange={(e)=>setBook({...book,Description:e.target.value})}
//           />

//           <button className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600">
//             Add Book
//           </button>

//         </form>

//       </div>

//     </div>
//   );
// }

// export default AddBook;





