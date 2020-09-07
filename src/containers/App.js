import React from 'react';
import Unsplash from 'unsplash-js';
import {connect} from 'react-redux';
import {
	Route,
    Switch,
    Redirect,
    Link,
    withRouter
} from 'react-router-dom';
import ShowFullscreen from '../components/fullscreen-viewing/ShowFullscreen.js';
import ShowFeed from '../components/photos-feed/ShowFeed.js';
import Header from '../components/header/Header.js';
import {addPhoto} from '../actions/actions.js';
import {login} from '../actions/actions.js';

function UnsplashApp(props) {
	let {history, photosData, addPhoto, login} = props;

	let unsplash = new Unsplash({
		accessKey: "tislRE5tcfRlNjGf805hJ_vf917iV08JcjtfLWsdQ4w",
		secret: "p5PHSSQPeNrXIES54icFqPiu-AAMDs9Bl8L3fgQ2gc0",
		callbackUrl: "https://gamaded.xyz/",
		headers: {
			"client_id": "tislRE5tcfRlNjGf805hJ_vf917iV08JcjtfLWsdQ4w"
		},
	});

	let code = window.location.search.split('code=')[1];

	return (
		<Switch>
			<Route history={history} exact path="/home">
				<Header unsplash={unsplash} code='1' login={login}/>
				<ShowFeed unsplash={unsplash} photosData={photosData}/>
			</Route>
			<Route history={history} path="/fullscreen" photosData={photosData} component={ShowFullscreen}></Route>
			<Route history={history} exact path="/">
				<Redirect to="/home"></Redirect>
			</Route>
		</Switch>
	)
}

let mapStateToProps = (state) => {
	return {
		photosData: state
	}

}

let mapDispatchToProps = (dispatch) => {
	return {
		addPhoto: (photo) => dispatch(addPhoto(photo)),
		login: (code) => dispatch(login(code))
	}
}

UnsplashApp = connect(
	mapStateToProps,
	mapDispatchToProps
)(UnsplashApp);

export default withRouter(UnsplashApp);
