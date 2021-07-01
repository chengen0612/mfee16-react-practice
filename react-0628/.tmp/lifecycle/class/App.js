import React from 'react'
import Child from './components/Child'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isChildAlive: true,
    }
    console.log('App constructor')
  }

  componentDidMount() {
    console.log('App componentDidMount')
    console.log('-----------------')
  }

  componentDidUpdate() {
    console.log('App componentDidUpdate')
    console.log('-----------------')
  }

  render() {
    console.log('App render')
    return (
      <>
        <button
          onClick={() => {
            this.setState({ isChildAlive: !this.state.isChildAlive })
          }}
        >
          {this.state.isChildAlive ? '死掉!' : '活著!'}
        </button>
        <hr />
        {this.state.isChildAlive && <Child />}
      </>
    )
  }
}

export default App
