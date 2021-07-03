import React, { useState, useEffect } from 'react'
import Button from './components/Button'

function Parent() {
  // 初始化
  const [total, setTotal] = useState(
    // iife
    // only for study
    (function () {
      console.log('App init(total constructor)')
      return 0
    })()
  )

  const [didMount, setDidMount] = useState(
    (function () {
      console.log('App init(didMount constructor)')
      return false
    })()
  )

  // componentDidMount
  useEffect(() => {
    console.log('App componentDidMount')
    console.log('------------------')
    setDidMount(true)
  }, [])

  // componentDidMount + componentDidUpdate
  useEffect(() => {
    // console.log('componentDidUpdate + mix', total)
    // console.log('------------------')
  }, [total])

  // force componentDidUpdate
  /* eslint-disable */
  useEffect(() => {
    if (didMount === true) {
      console.log('App componentDidUpdate', total)
      console.log('------------------')
    }
  }, [total])
  /* eslint-enable */

  return (
    <>
      {
        // iife
        (function () {
          console.log('App return(render)')
        })()
      }

      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
      <Button operator="-" total={total} setTotal={setTotal} />
      <Button operator="+" total={total} setTotal={setTotal} />
    </>
  )
}

export default Parent
