import React from 'react'
import PropTypes from 'prop-types'

function Child(props) {
  console.log(props)
  // 解構賦值
  const { text, color, count } = props
  return (
    <>
      <h1 style={{ color: color }}>
        {text}
        {count}
      </h1>
    </>
  )
}

// default
Child.defaultProps = {
  text: "I'm default text",
  color: 'pink',
}

// rules
Child.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
}

export default Child
