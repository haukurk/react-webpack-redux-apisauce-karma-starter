import { combineReducers } from 'redux';
import counter from './counter';
import authentication from './authentication';
import system from './system';

/**
 * Combinator for reducers.
 */
const rootReducer = combineReducers({
    counter,
    authentication,
    system
});

export default rootReducer;
