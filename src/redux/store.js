import {createStore, combineReducers} from 'redux'
import testReducer from './reducerTest/testReducer'

const rootReducer = combineReducers({
    tested: testReducer
})

const store = createStore(rootReducer);

export default store;
