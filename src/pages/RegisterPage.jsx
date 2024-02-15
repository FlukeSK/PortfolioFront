import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { createUserWithEmailAndPassword, auth } from '../api/auth'

const Register = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
      setErrorMessage(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>สมัครสมาชิก</h2>
      <div className="container">
        <label htmlFor="username">Email</label>
        <input ref={emailRef} type="email" name="username" required />

        <label htmlFor="password">Password</label>
        <input ref={passwordRef} type="password" name="password" required />

        <button type="submit">Register</button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  )
}

export default Register
