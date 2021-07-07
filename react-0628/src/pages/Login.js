import { withRouter } from 'react-router-dom'

function Login(props) {
  // 觀察 HOC 的狀態
  // console.log(props)

  const { auth, setAuth } = props

  return (
    <>
      <h1>Login</h1>
      <h3>目前登入狀況: {auth ? '登入' : '登出'}</h3>
      {auth ? (
        <button
          onClick={() => {
            setAuth(false)
          }}
        >
          登出
        </button>
      ) : (
        <button
          onClick={() => {
            setAuth(true)
            props.history.push('/about')
          }}
        >
          登入
        </button>
      )}
    </>
  )
}

// HOC(高階元件)，用於綁入 Router 中的三個屬性值
export default withRouter(Login)
