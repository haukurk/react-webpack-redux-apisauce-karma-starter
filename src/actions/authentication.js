import * as Type from 'constants/action-types';
import { login } from '../api/modules/login';

/**
 * Action Creator for failed login.
 * @param  {object} error message
 * @return {object} action for login failed.
 */
export function loginFailed(error) {
    return { type: Type.ERROR_LOGIN, error: error };
}

/**
 * Action Creator for succeeded logins
 * @param  {object} user object from API.
 * @return {object} action for succeded logins.
 */
export function loginSucceded(user) {
    return { type: Type.SUCCESS_LOGIN, payload: user };
}

/**
 * Action Creator for when requesting login
 * @return {object} action for request login
 */
export function requestingLogin() {
    return { type: Type.REQUEST_LOGIN };
}

/**
 * Action Creator for forgetting login info
 * @return {object} action for when you want to forget login.
 */
export function forgetLogin() {
    return { type: Type.FORGET_LOGIN };
}

/**
 * Function that sends request to AuthAPI
 * @param  {string} user that is being authenticated
 * @param  {string} pass of the user.
 * @param  {int} subsys of where the user is positioned.
 * @return {promise-ish} apisauce promise-based repsonse.
 */
export function loginWithAPI(user, pass, subsys) {
    return (dispatch) => {

        dispatch(requestingLogin()); // Start by dispatching a thunk that tell us that we are requesting a login.
        
        login(user, pass, subsys)
        .then(function(response) {
            if(response.ok === true) {
                dispatch(loginSucceded(response)); // Dispatch Login Success Action.
            } else {
                dispatch(loginFailed(response.problem)); // Dispatch Login Failed Action.
            }
        });

  };
}
