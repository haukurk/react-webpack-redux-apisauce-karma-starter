import { combineReducers } from 'redux';
import counter from './counter';
import authentication from './authentication';
import system from './system';
import { routerReducer } from 'react-router-redux'

/**
 * Combinator for reducers.
 */
const rootReducer = combineReducers({
    counter,
    authentication,
    system,
    routing: routerReducer // For routing
});

export default rootReducer;
