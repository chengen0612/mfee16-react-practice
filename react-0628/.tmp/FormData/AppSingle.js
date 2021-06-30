import React, { useState } from 'react'

function App() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    // avoid auto reload behavior
    e.preventDefault()

    const data = new FormData(e.target)

    // get form FormData obj
    console.log(data.get('username'))
    console.log(data.get('email'))
    console.log(data.get('password'))

    // get from state
    // console.log(username)
    // console.log(email)
    // console.log(password)

    // ex. send to service
  }

  return (
    <>
      <h1>表單驗證</h1>
      <h3>文字輸入框</h3>
      <form onSubmit={handleSubmit}>
        <label>帳號</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          required
        />
        <label>信箱</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          required
        />
        <label>密碼</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          required
          minLength="6"
        />
        <button type="submit">送出</button>
      </form>
    </>
  )
}

export default App
