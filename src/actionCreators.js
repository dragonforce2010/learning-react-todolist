import axios from 'axios'
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST,
  GET_INIT_LIST,
} from './actionTypes'
import store from './store';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddTodoItemAction = () => ({
  type: ADD_TODO_ITEM,
})

export const getDeleteTodoItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const getInitListAction = (data) => ({
  type: INIT_LIST,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/list.json').then((res) => {
      const data = res.data
      const action = getInitListAction(data)
      dispatch(action)
    })
  }
}

export const getInitList = () => ({
  type: GET_INIT_LIST
})