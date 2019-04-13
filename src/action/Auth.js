import {
    SIGNIN_USER,
    SIGNIN_USER_SUCCESS
} from '../constants/ActionTypes'


export const userSignIn = (user) => {
    return {
      type: SIGNIN_USER,
      user: user
    };
  };

export const userSignInSuccess = (authUser) => {
    return {
      type: SIGNIN_USER_SUCCESS,
      user: authUser,
      isLogin: true
    }
};

export const userSignInFail = () => {
    return {
      type: SIGNIN_USER_SUCCESS,
      user: null,
      isLogin: false
    }
}; 