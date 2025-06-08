import { useState } from 'react'
import './App.css'
import Login from './Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import LoginFailed from './LoginFailed';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/login-failed' element={<LoginFailed />} />
      </Routes>
    </BrowserRouter>    
    </>
  )
}

export default App
