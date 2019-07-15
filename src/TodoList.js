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
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="inputArea">Please Input your tasks</label>
          <input  className='input'
                  id="inputArea"
                  value={this.state.inputValue}
                  onChange={ this.handleInputChange.bind(this)} />
        <button onClick={ this.handleSubmit.bind(this)}>提交</button>
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
                    <TodoItem/>
                </div>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })    
  }

  handleSubmit() {
    this.setState({
      todoList: [...this.state.todoList, this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemDelete(index) {
    const todoList = [...this.state.todoList]
    todoList.splice(index, 1)
    this.setState({
      todoList: todoList
    })
  }
}

export default TodoList