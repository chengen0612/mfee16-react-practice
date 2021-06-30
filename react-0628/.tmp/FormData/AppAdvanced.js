import React, { useState } from 'react'

function App() {
  // 存取狀態
  const [fields, setFields] = useState({
    username: '',
    email: '',
    password: '',
    agree: false,
  })

  // 存取錯誤訊息
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    email: '',
    password: '',
    agree: '',
  })

  // 欄位發生變化
  const handleFieldChange = (e) => {
    // 判斷該輸入的屬性值
    const updatedData =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value

    // 即時更新狀態物件
    const updatedFields = {
      ...fields,
      [e.target.name]: updatedData,
    }
    setFields(updatedFields)
  }

  // ********錯誤處理********

  // 任意欄位發生變動
  const handleFormChange = (e) => {
    console.log('正在更新欄位: ', e.target.name)

    // 清空該欄位的錯誤訊息
    const updatedFieldsErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    }
    setFieldErrors(updatedFieldsErrors)
  }

  // 出現不合法行為
  const handleFormInvalid = (e) => {
    // 擋住 HTML5 預設的警告訊息 (訊息泡泡)
    e.preventDefault()

    const updatedFieldsErrors = {
      ...fieldErrors,
      // 存取預設的錯誤訊息
      [e.target.name]: e.target.validationMessage,
    }
    setFieldErrors(updatedFieldsErrors)
  }

  // ********成功送出********

  // 取得表單資料
  const handleSubmit = (e) => {
    // avoid auto reload
    e.preventDefault()

    // save data with special obj
    const data = new FormData(e.target)

    // get data from FormData obj
    console.log(data.get('username'))
    console.log(data.get('email'))
    console.log(data.get('password'))

    // ex. send to service
  }

  return (
    <>
      <h1>表單驗證</h1>
      <h3>文字輸入框</h3>
      <form
        onSubmit={handleSubmit}
        onChange={handleFormChange}
        onInvalid={handleFormInvalid}
      >
        <label>帳號</label>
        <input
          type="text"
          name="username"
          value={fields.username}
          onChange={handleFieldChange}
          required
        />
        <br />
        {fieldErrors.username !== '' && (
          <small className="text-danger form-text">
            {fieldErrors.username}
          </small>
        )}
        <label>信箱</label>
        <input
          type="email"
          name="email"
          value={fields.email}
          onChange={handleFieldChange}
          required
        />
        <br />
        {fieldErrors.email !== '' && (
          <small className="text-danger form-text">{fieldErrors.email}</small>
        )}
        <label>密碼</label>
        <input
          type="password"
          name="password"
          value={fields.password}
          onChange={handleFieldChange}
          required
          minLength="6"
        />
        <br />
        {fieldErrors.password !== '' && (
          <small className="text-danger form-text">
            {fieldErrors.password}
          </small>
        )}
        <label>勾選方塊</label>
        <input
          type="checkbox"
          name="agree"
          value={fields.agree}
          onChange={handleFieldChange}
          required
        />
        <br />
        {fieldErrors.agree !== '' && (
          <small className="text-danger form-text">{fieldErrors.agree}</small>
        )}
        <button type="submit">送出</button>
      </form>
    </>
  )
}

export default App
