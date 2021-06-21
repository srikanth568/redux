import {createStore,compose} from 'redux'
import {combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import laptopReducer from './reducers/laptopReducer';
import mobileReducer from './reducers/mobileReducer';
import usersReducer from './reducers/usersReducer';
import logger from 'redux-logger'

const rootReducer = combineReducers({laptopReducer,mobileReducer,usersReducer})

const store = createStore(rootReducer,compose(applyMiddleware(thunk,logger)));

export default store;