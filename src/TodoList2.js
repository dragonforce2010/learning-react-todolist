import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import * as action from './actionCreators'
class TodoList2 extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleClick = this.handleClick.bind(this)

    store.subscribe(this.handleStoreChange)
  }

  render() {
    return (
      <div style={{margin: '10px'}}>
        <Input value={ this.state.inputValue } 
               placeholder='todo info' 
               style={{ width: '300px', margin: '10px'}}
               onChange={this.handleInputChange}>
        </Input>
        <Button 
              type='primary'
              onClick={this.handleClick}
        >
          Search
        </Button>
        <List 
              style={{margin: '10px', width: '300px'}} 
              bordered
              dataSource={ this.state.listData }
              renderItem={(item,index) => (
                <List.Item onClick={ this.handleItemDelete.bind(this, index)}>
                  {item}
                </List.Item>
              )}/>
      </div>
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

export default TodoList2