import React, { useState } from 'react'

function App() {
  // 養成習慣給預設值
  const [fields, setFields] = useState({
    username: '',
    email: '',
    password: '',
  })

  // 欄位變動時更新物件
  const handleFieldChange = (e) => {
    // 用欄位變更後的值取代原物件的屬性值
    const updatedFields = { ...fields, [e.target.name]: e.target.value }
    setFields(updatedFields)
  }

  // 取得送出後的表單資料
  const handleSubmit = (e) => {
    // avoid auto reload behavior
    e.preventDefault()

    const data = new FormData(e.target)

    // get form FormData obj
    console.log(data.get('username'))
    console.log(data.get('email'))
    console.log(data.get('password'))

    // get from state
    // console.log(fields.username)
    // console.log(fields.email)
    // console.log(fields.password)

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
          value={fields.username}
          onChange={handleFieldChange}
          required
        />
        <label>信箱</label>
        <input
          type="email"
          name="email"
          value={fields.email}
          onChange={handleFieldChange}
          required
        />
        <label>密碼</label>
        <input
          type="password"
          name="password"
          value={fields.password}
          onChange={handleFieldChange}
          required
          minLength="6"
        />
        <button type="submit">送出</button>
      </form>
    </>
  )
}

export default App
