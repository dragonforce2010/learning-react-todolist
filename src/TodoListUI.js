import React, { Component } from 'react'
import { Input, Button, List } from 'antd'

class TodoListUI extends Component {
  render() {
    return (
      <div style={{margin: '10px'}}>
        <Input value={ this.props.inputValue } 
               placeholder='todo info' 
               style={{ width: '300px', margin: '10px'}}
               onChange={this.props.handleInputChange}>
        </Input>
        <Button 
              type='primary'
              onClick={this.props.handleClick}
        >
          Search
        </Button>
        <List 
              style={{margin: '10px', width: '300px'}} 
              bordered
              dataSource={ this.props.listData }
              renderItem={(item, index) => (
                <List.Item onClick={ () => {
                  this.props.handleItemDelete(index)
                }}>
                  {item}
                </List.Item>
              )}/>
      </div>
    )
  }
}

export default TodoListUI