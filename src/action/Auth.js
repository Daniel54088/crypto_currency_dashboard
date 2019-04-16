import {
    SIGNIN_USER_SUCCESS,
    LOGOUT_USER_SUCCESS
} from '../constants/ActionTypes'

export const userSignInSuccess = (authUser) => {
    return {
      type: SIGNIN_USER_SUCCESS,
      user: authUser,
      isLogin: true
    }
};


export const userLogOutSuccess = () => {
    return {
      type: LOGOUT_USER_SUCCESS,
      user: null,
      isLogin: false
    }
};
