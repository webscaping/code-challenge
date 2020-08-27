import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import { App } from './components/App';
import reducers from './reducers';

// Add FontAwesome Icons globally to app
library.add(faExclamationTriangle);

// Add redux and thunk middleware to dispatch asynchronous actions
const store = createStore(
    reducers,
    applyMiddleware(ReduxThunk)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);