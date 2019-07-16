import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    return <div onClick={this.handleClick}>{this.props.item}</div>
  }

  handleClick() {
    const { index } = this.props
    this.props.deleteItem(index)
  }
}

TodoItem.propTypes = {
  content: PropTypes.string.isRequired,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  content: 'Dummy Content'
}

export default TodoItem