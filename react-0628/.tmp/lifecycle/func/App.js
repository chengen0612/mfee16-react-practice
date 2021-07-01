import React, { useState, useEffect } from 'react'
// import Child from './components/Child'

function Parent() {
  // 初始化
  const [total, setTotal] = useState(
    // iife
    // only for study
    (function () {
      console.log('constructor(init)')
      return 0
    })()
  )
  const [didMount, setDidMount] = useState(false)

  // componentDidMount
  useEffect(() => {
    console.log('componentDidMount')
    console.log('------------------')
    setDidMount(true)
  }, [])

  // componentDidMount + componentDidUpdate
  // would also fire while initialized
  useEffect(() => {
    // console.log('componentDidUpdate + mix', total)
    // console.log('------------------')
  }, [total])

  // force componentDidUpdate
  /* eslint-disable */
  useEffect(() => {
    if (didMount === true) {
      console.log('componentDidUpdate', total)
      console.log('------------------')
    }
  }, [total])
  /* eslint-enable */

  return (
    <>
      {
        // iife
        (function () {
          console.log('render(return)')
        })()
      }

      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default Parent
