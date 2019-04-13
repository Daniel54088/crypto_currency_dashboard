import {
    SIGNIN_USER_SUCCESS
} from "../constants/ActionTypes";

const INIT_STATE = {
    authUser: null,
    isLogin: false
}


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SIGNIN_USER_SUCCESS: {
            return {
              ...state,
              authUser: action.user,
              isLogin: true
            }
        }
          default:
          return state;
      }
}
