import React, { useEffect, useRef } from 'react'
import $ from 'jquery'

function App() {
  const btnRef = useRef(null)

  // componentDidMount
  useEffect(() => {
    // select DOM after render
    // jQuery
    $('#one').on('click', () => {
      alert('hello jquery!')
    })

    // conbine ref
    $(btnRef.current).on('click', () => {
      alert('hello ref hook!')
    })
  }, [])

  return (
    <>
      <button id="one">click jquery</button>
      <br />
      <button ref={btnRef}>click ref</button>
      <br />
    </>
  )
}

export default App
