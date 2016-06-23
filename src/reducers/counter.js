import * as Type from 'constants/action-types';

/**
 * Reducer for the counter part of the redux state.
 * @param  {Object} old state
 * @param  {Object} action from the action creator
 * @return {Object} reduced state.
 */
export default function counter(state = 0, action) {
    switch (action.type) {
        case Type.INCREMENT_COUNTER:
            return state + 1;
        case Type.DECREMENT_COUNTER:
            return state - 1;
        case Type.REHYDRATE:
            var incoming = action.payload.counter // redux-persist use payload.
            if (incoming)
                return incoming;
            return state
        default:
            return state;
    }
}
