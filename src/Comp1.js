import React, { Component, Fragment } from 'react';
import './Comp1.css'
import { CSSTransition } from 'react-transition-group'

class Comp1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }

    this.handleToggle = this.handleToggle.bind(this)
  }

  render() {
    return (
      <Fragment>
        <CSSTransition
          classNames='my-node'
          in={this.state.show}
          timeout={1000}
          unmountOnExit
          appear={true}
        >
          <div>hello</div>
        </CSSTransition>
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