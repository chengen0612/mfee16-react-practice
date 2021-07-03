import React, { useEffect } from 'react'

function Button({ operator, total, setTotal }) {
  /* eslint-disable */
  useEffect(() => {
    console.log(`Child ${operator} componentDidAmount`)
  }, [])

  useEffect(() => {
    console.log(`Child ${operator} componentDidUpdate ${total}`)
  }, [total])
  /* eslint-enable */

  useEffect(() => {
    return () => {
      console.log('Child componentWillUnmount')
    }
  }, [])

  return (
    <button
      onClick={() => {
        switch (operator) {
          case '-':
            setTotal(total - 1)
            break
          case '+':
            setTotal(total + 1)
            break
          default:
        }
      }}
    >
      {operator}
    </button>
  )
}

export default Button
