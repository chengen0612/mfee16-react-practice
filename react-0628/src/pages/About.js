function About({ auth }) {
  return (
    <>
      <h1>About</h1>
      <h3>目前登入狀況: {auth ? '登入' : '登出'}</h3>
    </>
  )
}

export default About
