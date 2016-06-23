import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
//import Reactotron from 'reactotron' // WebPack breaks Reactoron. Disabling.
import thunk from 'redux-thunk';
import { rehydrationComplete } from '../actions/rehydrate';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const finalCreateStore = compose(
        applyMiddleware(
            thunk, // Be able to pass thunks with dispatch, yey! A must for API calls.
            //Reactotron.reduxMiddleware // Use Reactotron to monitor your app. I recommend Redux addon for Chrome though.
            // WebPack breaks Reactoron. Disabling.
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);

    const store = finalCreateStore(rootReducer, initialState, autoRehydrate());

    persistStore(store, {
            whitelist: ['counter']
        }, () => store.dispatch(rehydrationComplete())); // redux-persist.

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
