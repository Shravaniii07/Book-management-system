import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
// import Intro from './pages/Intro';
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import Signup from './pages/Signup';
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
        
    </>
  )
}

export default App


