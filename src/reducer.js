import {
  DELETE_TODO_ITEM,
  ADD_TODO_ITEM,
  CHANGE_INPUT_VALUE,
  INIT_LIST,
} from './actionTypes'

const defaultState = {
  inputValue: 'please input a task',
  listData: []
}

// reducer可以接受state，但是不能修改state
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.listData.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.listData.splice(action.index, 1)
    return newState
  }

  if (action.type === INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.listData = action.data
    return newState
  }


  return state
}