import { combineReducers } from 'redux';
import counter from './counter';
import authentication from './authentication';

/**
 * Combinator for reducers.
 */
const rootReducer = combineReducers({
    counter,
    authentication
});

export default rootReducer;
