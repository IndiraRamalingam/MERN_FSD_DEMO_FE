import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <div>     
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App