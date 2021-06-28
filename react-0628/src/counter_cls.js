import React from 'react'

class App extends React.Component {
  // 初始化類別時使用的建構式
  constructor() {
    // 呼叫父母的建構式
    super()
    // 狀態必為物件型態
    this.state = {
      total: 0,
    }
  }

  render() {
    return (
      <>
        <h1
          // 在 JSX 引用 js 語法一律必須加上 {} 括號
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

export default App
