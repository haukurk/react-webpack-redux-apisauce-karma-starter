import * as Type from 'constants/action-types';

/**
 * Action Creator to increment the counter.
 * @return {object} action that increments counter
 */
export function increment() {
    return {
        type: Type.INCREMENT_COUNTER
    };
}

/**
 * Action Creator to decrement the counter
 * @return {object} action that decrements counter
 */
export function decrement() {
    return {
        type: Type.DECREMENT_COUNTER
    };
}

/**
 * Action Creator that only increments if the counter is odd.
 * @return {object || void} action that increments counter or void, depending on if the counter is odd.
 */
export function incrementIfOdd() {
    return (dispatch, getState) => {
        const { counter } = getState();

        if (counter % 2 === 0) {
            return;
        }

        dispatch(increment());
    };
}

/**
 * Action Creator that delays sending an increment action by 1 sec (default).
 * @param  {int} delay of the action to be sent.
 * @return {object} delayed action that increments the counter.
 */
export function incrementAsync(delay = 1000) {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment());
        }, delay);
    };
}
