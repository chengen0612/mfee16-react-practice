import React from 'react'

class Child extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
    }
    console.log('Child constructor')
  }

  componentDidMount() {
    console.log('Child componentDidMount')
  }

  componentDidUpdate() {
    console.log('Child componentDidUpdate', this.state.total)
    console.log('-----------------')
  }

  componentWillUnmount() {
    console.log('Child componentWillUnmount')
  }

  render() {
    console.log('Child render')
    return (
      <>
        <h1>Child</h1>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default Child
