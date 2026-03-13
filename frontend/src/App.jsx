import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
// import Intro from './pages/Intro';
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import Signup from './pages/Signup';
import Login from './pages/Login';
import AddBook from './pages/AddBook';
import ViewBooks from './pages/ViewBooks';
import DeleteBook from './pages/DeleteBook';
import UpdateBook from './pages/UpdateBook';
import Dashboard from "./pages/Dashboard";
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Intro/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/addbook" element={<AddBook/>} />
        <Route path="/viewbooks" element={<ViewBooks/>} />
        <Route path='/deletebook' element={<DeleteBook/>} />
         <Route path='/updatebook' element={<UpdateBook/>} />
         <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
        
    </>
  )
}

export default App


