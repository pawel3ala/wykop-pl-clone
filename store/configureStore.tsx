import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import currentUserReducer from './reducers/currentUserReducer'
import usersReducer from './reducers/usersReducer'
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    users: usersReducer
});

export type AppState = ReturnType<typeof rootReducer>
const store = createStore(rootReducer)

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer, composeEnhancers())
    let persistor = persistStore(store)
    return { store, persistor }
}