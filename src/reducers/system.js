import * as Type from 'constants/action-types';

let initialState = {
    rehydrated: false
}

/**
 * Reducer for various system states
 * @param  {Object} old state
 * @param  {Object} action from the action creator
 * @return {Object} reduced state.
 */
export default function counter(state = initialState, action) {
    switch (action.type) {
        case Type.REHYDRATED_COMPLETE:
            return Object.assign({}, state, {rehydrated: true});
        default:
            return state;
    }
}
