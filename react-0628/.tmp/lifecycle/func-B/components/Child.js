// do for research

import React, { useState, useEffect } from 'react'

function Child() {
  // iife
  const [start, setStart] = useState(
    (function () {
      console.log('Child init(constructor)')
      return false
    })()
  )

  const [total, setTotal] = useState(0)

  useEffect(() => {
    console.log('Child componentDidAmount')
  }, [])

  useEffect(() => {
    if (start === true) {
      console.log('Child componentDidUpdate')
      console.log('------------------')
    }
  }, [start, total])

  useEffect(() => {
    return () => {
      console.log('Child componentWillUnmount')
    }
  }, [])

  return (
    <>
      {
        // iife
        (function () {
          console.log('Child return(render)')
        })()
      }
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total - 1)
          setStart(true)
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setTotal(total + 1)
          setStart(true)
        }}
      >
        +
      </button>
    </>
  )
}

export default Child
