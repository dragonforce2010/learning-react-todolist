import React, { Component, Fragment } from 'react'
import './todoList.css'
import TodoItem from './todoItem'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      todoList: [
        'Learning React',
        'Learning Go'
      ]
    }
    this.handleInputChange = this.handleInputChange.bind(this) 
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="inputArea">Add a task </label>
          <input  className='input'
                  id="inputArea"
                  value={this.state.inputValue}
                  onChange={ this.handleInputChange} />
        <button onClick={ this.handleSubmit}>提交</button>
        </div>
        <ul>
          {
            this.state.todoList.map((item, index) => {
              return (
                <div>
                    {/* <li key={ index }
                    onClick={ this.handleItemDelete.bind(this, index)}
                    dangerouslySetInnerHTML={{__html: item}}> 
                    </li>*/}
                    <TodoItem item={item} index={index} deleteItem={this.handleItemDelete.bind(this)}/>
                </div>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }));
  }

  handleSubmit() {
    this.setState((prevState) => ({
      todoList: [...prevState.todoList, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleItemDelete(index) {
    const todoList = [...this.state.todoList]
    todoList.splice(index, 1)
    this.setState(() => ({
      todoList: todoList
    }))
  }
}

export default TodoList