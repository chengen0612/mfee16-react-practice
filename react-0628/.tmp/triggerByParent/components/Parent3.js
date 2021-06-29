import React, { useState } from 'react'
import ChildA from './ChildA'

function Parent() {
  const [ParentData, setParentData] = useState('Parent Data')
  const [isChildAAlive, setIsChildAAlive] = useState(true)

  return (
    <>
      <button
        onClick={() => {
          isChildAAlive ? setIsChildAAlive(false) : setIsChildAAlive(true)
        }}
      >
        {isChildAAlive ? 'ChildA Bye!' : 'ChildA Back!'}
      </button>
      {isChildAAlive && <ChildA data={ParentData} />}
    </>
  )
}

export default Parent
