import { createStore, combineReducers, applyMiddleware } from "redux";
import currentUserReducer from './reducers/currentUserReducer'
import usersReducer from './reducers/usersReducer'

export const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    users: usersReducer

},);

export type AppState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)