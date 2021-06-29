import React, { useState } from 'react'
import ChildA from './ChildA'

function Parent() {
  const [ParentData, setParentData] = useState('Parent Data')
  const [isChildAAlive, setIsChildAAlive] = useState(true)

  return (
    <>
      <button
        onClick={() => {
          setIsChildAAlive(false)
        }}
      >
        ChildA Bye!
      </button>
      {isChildAAlive && <ChildA data={ParentData} />}
    </>
  )
}

export default Parent
