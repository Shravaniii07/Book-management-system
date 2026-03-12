import { useEffect, useState } from "react";
import axios from "axios";

function ViewBooks() {

  const [books, setBooks] = useState([]);

  useEffect(() => {

    // const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    // setBooks(storedBooks);
    axios.get("http://localhost:8000/book/getbooks")
    .then((res)=>{
        console.log(res.data); 
      setBooks(res.data.BookList);
    })
    .catch((err)=>{
      console.log(err);
    });

  }, []);

  return (

    <div className="min-h-screen bg-sky-50 p-10">

      <h2 className="text-3xl font-bold text-center text-sky-700 mb-10">
        Book Collection
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {books.length === 0 ? (

          <p className="text-center col-span-3 text-gray-600">
            No books added yet
          </p>

        ) : (

          books.map((book, index) => (

            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >

              <h3 className="text-xl font-bold text-sky-700 mb-2">
                {book.BookTitle}
              </h3>

              <p className="text-gray-600">
                <strong>Author:</strong> {book.BookAuthor}
              </p>

              <p className="text-gray-600">
                <strong>Publish Date:</strong> {book.PublishDate}
              </p>

              <p className="text-gray-600">
                <strong>Price:</strong> ₹{book.Price}
              </p>

              <p className="text-gray-600 mt-2">
                <strong>Description:</strong> {book.Description}
              </p>

            </div>

          ))

        )}

      </div>

    </div>

  );
}

export default ViewBooks;


// import { useEffect, useState } from "react";

// function ViewBooks() {

//   const [books,setBooks] = useState([]);

//   useEffect(()=>{

//     const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
//     setBooks(storedBooks);

//   },[]);

//   return (

//     <div className="min-h-screen bg-sky-50 p-10">

//       <h2 className="text-3xl font-bold text-center text-sky-700 mb-10">
//         Book Collection
//       </h2>

//       <div className="grid md:grid-cols-3 gap-6">

//         {books.length === 0 ? (
//           <p>No books added yet</p>
//         ) : (

//           books.map((book,index)=>(
            
//             <div key={index} className="bg-white p-6 rounded-xl shadow-md">

//               <h3 className="text-xl font-bold text-sky-700">
//                 {book.title}
//               </h3>

//               <p className="text-gray-600">
//                 Author: {book.author}
//               </p>

//               <p className="text-gray-600">
//                 Genre: {book.genre}
//               </p>

//               <p className="text-gray-600">
//                 Year: {book.year}
//               </p>

//             </div>

//           ))

//         )}

//       </div>

//     </div>
//   );
// }

// export default ViewBooks;