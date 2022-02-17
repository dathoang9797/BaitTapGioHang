import React, { Component } from 'react'

type StateDemo = {
  isLogin: boolean,
  userName: string
}

export default class DemoState extends Component<{}, StateDemo> {
  state = {
    isLogin: false,
    userName: 'anh'
  }
  renderContent = () => {
    if (this.state.isLogin) {
      return <>
        <p>hello {this.state.userName}</p>
        <button onClick={this.handleLogOut}>dang xuat</button>
      </>
    } return <button onClick={this.handleLogin}>dang nhap </button>
  }
  handleLogin = () => {
    this.setState({
      isLogin: true,
    })
  }
  handleLogOut = () => {
    this.setState({
      isLogin: false,
    })
  }
  render() {
    return (
      <div>{this.renderContent()}</div>
    )
  }

}
