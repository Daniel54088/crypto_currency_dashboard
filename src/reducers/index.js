import {combineReducers} from 'redux';
import Auth from './Auth';
import Setting from './Setting';


const ReducerApp = combineReducers({
    auth:Auth,
    setting:Setting,
  })

export default ReducerApp