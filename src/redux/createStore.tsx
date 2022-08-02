import { legacy_createStore, applyMiddleware } from "redux"

import logger from "redux-logger"

import rootReducer from "./rootReducer"

export const middlewares = [logger]

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(...middlewares)
)

export default store

// export type RootState = ReturnType<typeof store.getState>
