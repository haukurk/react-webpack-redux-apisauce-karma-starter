import * as Type from 'constants/action-types';

/**
 * Action Creator to tell that rehydration is complete.
 * @return {object} action that notifies that rehydration is complete.
 */
export function rehydrationComplete() {
    return {
        type: Type.REHYDRATED_COMPLETE
    };
}
