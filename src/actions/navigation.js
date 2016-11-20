import { push } from 'react-router-redux';

/**
 * Function that helps us navigate.
 * @param path {string} uri to navigate to
 * @return void
 */
export function transitionTo(path) {
  return (dispatch) => {
    dispatch(push(path));
  };
}