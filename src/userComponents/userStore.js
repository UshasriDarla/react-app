import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducer from './userReducer'


const store = createStore(reducer, applyMiddleware(logger, thunk))

export default store