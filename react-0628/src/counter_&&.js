import React, { useState } from 'react'

function App() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
      <br />
      {total === 0 && <p>你可以開始點數字了</p>}
      {/* {!total && <p>你可以開始點數字了</p>} */}
    </>
  )
}

export default App
