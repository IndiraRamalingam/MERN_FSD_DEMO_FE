import React, { useState } from 'react'

function ForgotPassword() {
  const [mail,setMail] = useState('');

  const handleForgotpassword =(event) =>{
    event.preventDefault();

  }
  
  return (
    <div>
      <form onSubmit={handleForgotpassword}>
      <br/><br/>
         <input 
         type='email'
         value={mail}
         placeholder='Email ID'
         onChange={(event) => setMail(event.target.value) }
        /><br/><br/>
        <button type="submit">Send Email</button>
      </form>
    </div>
  )
}

export default ForgotPassword