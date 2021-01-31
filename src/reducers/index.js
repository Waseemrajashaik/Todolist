import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import list from './_list'

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    list,
  })

export default createRootReducer
