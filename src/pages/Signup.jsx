import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import { useNavigate } from 'react-router-dom'

// styles
import './Login.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, signup } = useSignup()
  const navigate = useNavigate()

  const handleSubmit = (e) => {  
    e.preventDefault()
    signup(email, password)
    navigate('/')
  }
  
  return (
    <div className='signup-container'>
      <h2>Register A New User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>email:</span>
          <input
            required
            type="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            required
            type="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button>Submit</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}
