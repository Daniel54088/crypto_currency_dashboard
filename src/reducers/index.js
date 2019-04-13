import {combineReducers} from 'redux';
import Auth from './Auth';


const ReducerApp = combineReducers({
    auth:Auth
  })

export default ReducerApp