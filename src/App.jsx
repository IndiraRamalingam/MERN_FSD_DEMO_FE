import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <div>     
      <Router>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/forgot_password' element={<ForgotPassword />} />
            <Route path='/reset_password/:token' element={<ResetPassword />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App
