import { createStore, combineReducers, applyMiddleware } from "redux";
import currentUserReducer from './reducers/currentUserReducer'


export const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    // users: usersReducer

},);

export type AppState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)