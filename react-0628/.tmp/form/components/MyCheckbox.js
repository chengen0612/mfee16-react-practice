import React from 'react'

function MyCheckbox(props) {
  const { value, checkedValueList, setCheckedValueList } = props

  const handler = (e) => {
    const value = e.target.value

    if (!checkedValueList.includes(value)) {
      return setCheckedValueList([...checkedValueList, value])
    }

    // remove this item from array
    const newLikeList = checkedValueList.filter((removeT, i) => {
      return removeT !== value
    })
    setCheckedValueList(newLikeList)
  }

  return (
    <>
      <input
        type="checkbox"
        value={value}
        checked={checkedValueList.includes(value)}
        onChange={handler}
      />
      <label>{value}</label>
    </>
  )
}

export default MyCheckbox
