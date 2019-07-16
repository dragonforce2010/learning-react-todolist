import React, { Component, Fragment } from 'react';
import './Comp1.css'

class Comp1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }

    this.handleToggle = this.handleToggle.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div className={this.state.show ? 'show' : 'hide'}>hello</div>
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    )
  }

  handleToggle() {
    this.setState({
      show: !this.state.show
    })
  }
}

export default Comp1