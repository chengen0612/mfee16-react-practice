import React from 'react'

function ChildA(props) {
  return (
    <>
      <hr />
      <h2>ChildA</h2>
      {props.data}
      <hr />
    </>
  )
}

export default ChildA
