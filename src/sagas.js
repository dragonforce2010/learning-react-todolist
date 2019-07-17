import { takeEvery, put } from 'redux-saga/effects'
import { getInitList, GET_INIT_LIST } from './actionTypes'
import axios from 'axios'

function* getInitListData() {
  const res = yield axios.get('/list.json')
  const action = getInitList(res.data)
  yield put(action)
}

// generator 函数
function* mySaga() {
  // takeEvery表示捕捉每一个action
  yield takeEvery(GET_INIT_LIST, getInitListData)
}

export default mySaga