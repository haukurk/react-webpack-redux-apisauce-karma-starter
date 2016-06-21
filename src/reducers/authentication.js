import * as Type from 'constants/action-types';

/**
 * Initial State of the authentication part of the redux state.
 * @type {Object}
 */
const initialState = {
    requesting: false,
    authenticated: false
}

/**
 * Reducer for the authentication part of the redux state.
 * @param  {Object} old state
 * @param  {Object} action from the action creator
 * @return {Object} reduced state.
 */
export default function authentication(state = initialState, action) {
    switch (action.type) {
        case Type.REQUEST_LOGIN:
            return Object.assign({}, state, {
                requesting: true
            });
        case Type.SUCCESS_LOGIN:
            return Object.assign({}, state, {
                username: action.payload.username,
                token: action.payload.token,
                authenticated: true,
                error: "",
                requesting: false
            });
        case Type.ERROR_LOGIN:
            return Object.assign({}, state, {
               error: action.error,
               requesting: false
           });
        case Type.FORGET_LOGIN:
            return Object.assign({}, state, {
               token: "",
               requesting: false,
               authenticated: false
           });
        default:
            return state;
    }
}
