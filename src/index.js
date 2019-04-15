import React from 'react';
import ReactDOM from 'react-dom';
import Flickr from './components/Flickr';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import RootReducer from './reducers/FlickrReducer'

const store = createStore(
    RootReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <Flickr />
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
