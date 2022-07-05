import { legacy_createStore,applyMiddleware} from "redux"
// import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import rootReducer from "./rootReducer"

export const middlewares = [logger];

export const store = legacy_createStore(rootReducer, applyMiddleware(...middlewares));

export default store