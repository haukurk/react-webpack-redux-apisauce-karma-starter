// Demo purposes action types

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

// Authentication action types

// Note that async API calls have REQUEST, ERROR, SUCCESS action types.
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const ERROR_LOGIN = 'ERROR_LOGIN';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const FORGET_LOGIN = 'FORGET_LOGIN';

// Rehydrate types
import { REHYDRATE as ALIAS_RHYDRATE } from 'redux-persist/constants';
export const REHYDRATE = ALIAS_RHYDRATE;
export const REHYDRATED_COMPLETE = 'REHYDRATED_COMPLETE';
