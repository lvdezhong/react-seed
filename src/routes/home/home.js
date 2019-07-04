import React, { Component } from 'react'
import './home.less'
import { hot } from 'react-hot-loader'

@hot(module)
class Home extends Component {
  handleClick = () => {
  }

  render() {
    return (
      <div>
        <img src="/avatar1.png" alt="" />
        <div className="text" onClick={this.handleClick}>login</div>
      </div>
    )
  }
}

export default Home
