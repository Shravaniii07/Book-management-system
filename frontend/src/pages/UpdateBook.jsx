import { useState } from "react";
import axios from "axios";


function UpdateBook() {

  const [book, setBook] = useState({
    BookTitle: "",
    BookAuthor: "",
    PublishDate: "",
    Price: "",
    Description: ""
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async(e) => {
    e.preventDefault();

    // let books = JSON.parse(localStorage.getItem("books")) || [];

    // const updatedBooks = books.map((b) =>
    //   b.BookTitle.toLowerCase() === book.BookTitle.toLowerCase()
    //     ? book
    //     : b
    // );

    // localStorage.setItem("books", JSON.stringify(updatedBooks));

    // alert("Book Updated Successfully");
try{
  const res = await axios.put("http://localhost:8000/book/updatebook",book);

  alert(res.data.Message);

    setBook({
      BookTitle: "",
      BookAuthor: "",
      PublishDate: "",
      Price: "",
      Description: ""
    });
  }
  catch(err){
    console.log(err);
    alert("Error updating book");
    
  }
  };

  return (

    <div className="min-h-screen bg-sky-100 flex items-center justify-center">

      <div className="bg-white p-10 rounded-xl shadow-lg w-96">

        <h2 className="text-2xl font-bold text-center text-sky-700 mb-6">
          Update Book
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4">

        <input
  type="text"
  name="Id"
  placeholder="Book ID"
  className="w-full p-2 border rounded"
  value={book.Id}
  onChange={handleChange}
  required
/>

          <input
            type="text"
            name="BookTitle"
            placeholder="Book Title"
            className="w-full p-2 border rounded"
            value={book.BookTitle}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="BookAuthor"
            placeholder="Author"
            className="w-full p-2 border rounded"
            value={book.BookAuthor}
            onChange={handleChange}
          />

          <input
            type="date"
            name="PublishDate"
            className="w-full p-2 border rounded"
            value={book.PublishDate}
            onChange={handleChange}
          />

          <input
            type="number"
            name="Price"
            placeholder="Price"
            className="w-full p-2 border rounded"
            value={book.Price}
            onChange={handleChange}
          />

          <textarea
            name="Description"
            placeholder="Description"
            className="w-full p-2 border rounded"
            value={book.Description}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600"
          >
            Update Book
          </button>

        </form>

      </div>

    </div>

  );
}

export default UpdateBook;


// import { useState } from "react";

// function UpdateBook() {

//   const [searchTitle, setSearchTitle] = useState("");
//   const [book, setBook] = useState(null);

//   // SEARCH BOOK
//   const handleSearch = () => {

//     const books = JSON.parse(localStorage.getItem("books")) || [];

//     console.log("Books in storage:", books); // DEBUG

//     const foundBook = books.find(
//       (b) => b.BookTitle?.toLowerCase() === searchTitle.toLowerCase()
//     );

//     if (foundBook) {
//       setBook(foundBook);
//     } else {
//       alert("Book not found");
//       setBook(null);
//     }
//   };

//   // UPDATE BOOK
//   const handleUpdate = (e) => {
//     e.preventDefault();

//     let books = JSON.parse(localStorage.getItem("books")) || [];

//     const updatedBooks = books.map((b) =>
//       b.BookTitle.toLowerCase() === searchTitle.toLowerCase() ? book : b
//     );

//     localStorage.setItem("books", JSON.stringify(updatedBooks));

//     alert("Book Updated Successfully");

//     setBook(null);
//     setSearchTitle("");
//   };

//   return (
//     <div className="min-h-screen bg-sky-100 flex flex-col items-center justify-center">

//       {/* SEARCH SECTION */}
//       <div className="bg-white p-6 rounded-xl shadow-lg w-96 mb-6">

//         <h2 className="text-xl font-bold text-center text-sky-700 mb-4">
//           Search Book To Update
//         </h2>

//         <input
//           type="text"
//           placeholder="Enter Book Title"
//           className="w-full p-2 border rounded mb-4"
//           value={searchTitle}
//           onChange={(e) => setSearchTitle(e.target.value)}
//         />

//         <button
//           type="button"
//           onClick={handleSearch}
//           className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600"
//         >
//           Search Book
//         </button>

//       </div>

//       {/* UPDATE FORM */}
//       {book && (

//         <div className="bg-white p-10 rounded-xl shadow-lg w-96">

//           <h2 className="text-2xl font-bold text-center text-sky-700 mb-6">
//             Update Book
//           </h2>

//           <form onSubmit={handleUpdate} className="space-y-4">

//             <input
//               type="text"
//               placeholder="Book Title"
//               className="w-full p-2 border rounded"
//               value={book.BookTitle}
//               onChange={(e) =>
//                 setBook({ ...book, BookTitle: e.target.value })
//               }
//             />

//             <input
//               type="text"
//               placeholder="Author"
//               className="w-full p-2 border rounded"
//               value={book.BookAuthor}
//               onChange={(e) =>
//                 setBook({ ...book, BookAuthor: e.target.value })
//               }
//             />

//             <input
//               type="date"
//               className="w-full p-2 border rounded"
//               value={book.PublishDate}
//               onChange={(e) =>
//                 setBook({ ...book, PublishDate: e.target.value })
//               }
//             />

//             <input
//               type="number"
//               placeholder="Price"
//               className="w-full p-2 border rounded"
//               value={book.Price}
//               onChange={(e) =>
//                 setBook({ ...book, Price: e.target.value })
//               }
//             />

//             <textarea
//               placeholder="Description"
//               className="w-full p-2 border rounded"
//               value={book.Description}
//               onChange={(e) =>
//                 setBook({ ...book, Description: e.target.value })
//               }
//             />

//             <button
//               type="submit"
//               className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600"
//             >
//               Update Book
//             </button>

//           </form>

//         </div>

//       )}

//     </div>
//   );
// }

// export default UpdateBook;