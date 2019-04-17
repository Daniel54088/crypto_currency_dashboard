import {
    TOGGLE_COLLAPSED_NAV,
    WINDOW_WIDTH
} from '../constants/ActionTypes'

export function toggleCollapsedNav(isNavCollapsed) {
    return {
        type: TOGGLE_COLLAPSED_NAV, 
        isNavCollapsed,
    };
}

export function updateWindowWidth(width) {
    return {
        type: WINDOW_WIDTH, 
        width
    };
}