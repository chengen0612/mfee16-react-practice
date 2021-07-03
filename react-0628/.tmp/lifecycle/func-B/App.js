// do for research

import React, { useState, useEffect } from 'react'
import Child from './components/Child'

function Parent() {
  // iife
  const [start, setStart] = useState(
    (function () {
      console.log('App init(constructor)')
      return false
    })()
  )

  const [childAlive, setChildAlive] = useState(true)

  // componentDidMount
  useEffect(() => {
    console.log('App componentDidMount')
    console.log('------------------')
  }, [])

  // force componentDidUpdate
  useEffect(() => {
    if (start === true) {
      console.log('App componentDidUpdate')
      console.log('------------------')
    }
  }, [start, childAlive])

  return (
    <>
      {
        // iife
        (function () {
          console.log('App return(render)')
        })()
      }

      <button
        onClick={() => {
          setChildAlive(!childAlive)
          setStart(true)
        }}
      >
        {childAlive ? '不見' : '出來'}
      </button>

      {childAlive && <Child />}
    </>
  )
}

export default Parent
