import React, { Component } from 'react'
type StateDemo = {
  isLogin: boolean,
  userName: string
}

export default class DemoDieuKien extends Component<{}, StateDemo> {
  isLogin = 1;
  userName = 'anh'
  renderContent = () => {
    if (this.isLogin) {
      return 'hello ' + this.userName

    } return <button onClick={this.handleLogin}>login</button>

  }
  handleLogin = () => {
    this.userName = 'dat'
    console.log(this.userName);
  }
  render() {
    return (
      <>      <div>{this.renderContent()}</div>
        <div>
          {this.isLogin ? `xin chao ${this.userName}` : <button>login</button>}
        </div></>

    )
  }
}
