import {
    TOGGLE_COLLAPSED_NAV,
    WINDOW_WIDTH
} from "../constants/ActionTypes";

const INIT_STATE = {
    navCollapsed: false,
    width: window.innerWidth,
}


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case '@@router/LOCATION_CHANGE':
          return {
            ...state,
            navCollapsed: false
          };
        case TOGGLE_COLLAPSED_NAV:
          return {
            ...state,
            navCollapsed: action.isNavCollapsed
          };
        case WINDOW_WIDTH:
          return {
            ...state,
            width: action.width
          };          
          
          default:
          return state;
    }
}
