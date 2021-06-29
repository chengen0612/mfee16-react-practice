import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  const [ParentData, setParentData] = useState('Parent Data')
  return (
    <>
      <Child />
      <ChildA data={ParentData} />
      <ChildB setData={setParentData} />
    </>
  )
}

export default Parent
