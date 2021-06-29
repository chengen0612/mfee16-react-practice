import React, { useState } from 'react'

function ChildB(props) {
  const [ChildBData, setChildBData] = useState('Child B Data')
  return (
    <>
      <hr />
      <h2>ChildB</h2>
      <button
        onClick={() => {
          props.setData(ChildBData)
        }}
      >
        設定 Parent Data
      </button>
      <hr />
    </>
  )
}

export default ChildB
