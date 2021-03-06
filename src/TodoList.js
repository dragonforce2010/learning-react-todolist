import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store'
import * as action from './actionCreators'
import TodoListUI from './TodoListUI'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)

    store.subscribe(this.handleStoreChange)
  }

  componentDidMount() {
    store.dispatch(action.getInitList())
  }

  render() {
    return (
      <TodoListUI 
          inputValue={ this.state.inputValue}
          handleInputChange={ this.handleInputChange }
          handleClick={ this.handleClick }
          listData={ this.state.listData }
          handleItemDelete={ this.handleItemDelete }
      />
    )
  }

  handleInputChange(e) {
    store.dispatch(action.getInputChangeAction(e.target.value))
  } 

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleClick() {
    store.dispatch(action.getAddTodoItemAction())
  }

  handleItemDelete(index) {
    store.dispatch(action.getDeleteTodoItemAction(index))
  }
}

export default TodoList