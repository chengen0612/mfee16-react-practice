import React from 'react'

function App() {
  const array = ['Hello', 'JS', 'Welcome']
  return (
    <>
      <h1>陣列</h1>
      <ul>
        {array.map((value, index) => {
          return <li key={index}>{value}</li>
        })}
      </ul>
    </>
  )
}

export default App
