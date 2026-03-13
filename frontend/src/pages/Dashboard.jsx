import { useNavigate } from "react-router-dom";

function Dashboard() {

const navigate = useNavigate();

const handleLogout = () => {
localStorage.removeItem("isLoggedIn");
navigate("/login");
};

return (

<div className="flex min-h-screen">

{/* LEFT SIDEBAR */}

<div className="w-64 bg-sky-700 text-white flex flex-col justify-between">

<div>

<h2 className="text-2xl font-bold p-6 border-b border-sky-500">
BookManager
</h2>

<div className="flex flex-col p-4 gap-4">

<button
onClick={() => navigate("/addbook")}
className="text-left hover:bg-sky-600 p-2 rounded"
>
Add Book
</button>

<button
onClick={() => navigate("/viewbooks")}
className="text-left hover:bg-sky-600 p-2 rounded"
>
View Books
</button>

<button
onClick={() => navigate("/updatebook")}
className="text-left hover:bg-sky-600 p-2 rounded"
>
Update Book
</button>

<button
onClick={() => navigate("/deletebook")}
className="text-left hover:bg-sky-600 p-2 rounded"
>
Delete Book
</button>

</div>

</div>


{/* LOGOUT BOTTOM */}

<div className="p-4 border-t border-sky-500">

<button
onClick={handleLogout}
className="w-full bg-red-300 py-2 rounded hover:bg-red-600"
>
Logout
</button>

</div>

</div>


{/* RIGHT CONTENT */}

<div className="flex-1 bg-sky-50 p-10">

<h1 className="text-4xl font-bold text-sky-700 mb-6">
Dashboard
</h1>

<p className="text-gray-600">
Select an option from the sidebar to manage your books.
<br></br>
Welcome to the BookManager Dashboard. This section allows users to easily control and manage their personal book collection through a simple and user-friendly interface. Users can perform all CRUD operations such as creating new book records, reading and viewing existing books, updating book information, and deleting unwanted entries. The dashboard acts as the main control panel of the application, helping users efficiently organize their digital library.
</p>

</div>

</div>

);

}

export default Dashboard;