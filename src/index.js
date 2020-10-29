import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {createBrowserHistory} from 'history';
import {BrowserRouter as Router} from 'react-router-dom';

import UnsplashApp from './containers/App';
import appData from './reducers/reducers.js';

let history = createBrowserHistory();

let initialState = {
	photosList: [],
	currentPhoto: {},
	user: {
		username: 'Гость',
		profile_image: {medium: 'https://www.meme-arsenal.com/memes/5eae5104f379baa355e031fa1ded886c.jpg'}
	},
	usersLikes: [],
	isAuth: false,
	counter: 1
};

let store = createStore(appData, initialState);

ReactDOM.render(
  <Router>
    <UnsplashApp history = {history} store = {store}/>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
