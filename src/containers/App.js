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

let code = window.location.search.split('code=')[1];

let unsplash = new Unsplash({
	accessKey: "tislRE5tcfRlNjGf805hJ_vf917iV08JcjtfLWsdQ4w",
	secret: "p5PHSSQPeNrXIES54icFqPiu-AAMDs9Bl8L3fgQ2gc0",
	callbackUrl: "http://localhost:3000/",
	headers: {
		"client_id": "tislRE5tcfRlNjGf805hJ_vf917iV08JcjtfLWsdQ4w"
	},
});

class UnsplashApp extends React.Component {
	constructor(props) {
		super(props);
		this.history = props.history;
		this.photosData = props.photosData;
		this.login = props.login;
		this.addPhoto = props.addPhoto;
	}
	
	componentDidMount() {
		console.log(this.photosData)
		if (code !== undefined) {
			unsplash.auth.userAuthentication(code)
				.then(res => res.json())
				.then(json => {
					unsplash.auth.setBearerToken(json.access_token);
					if (unsplash._bearerToken !== undefined) {
						console.log(unsplash._bearerToken)
						this.login();
					}
					console.log(json)
					console.log(unsplash)
					console.log(this.photosData)
				})
		}
		unsplash.photos.listPhotos(1, 10)
			.then(res => res.json())
			.then(json => {
				console.log(json)
				json.map(photo => {
					this.addPhoto(photo)
				})
				console.log(this.photosData)
				this.setState(this.photosData)
			});
		alert('fuck me')
	}
	
	render() {
		
		return (
			<Switch>
				<Route history={this.history} exact path="/home">
					<Header unsplash={unsplash} code={code}/>
					<ShowFeed unsplash={unsplash} addPhoto={this.addPhoto} photosData={this.photosData}/>
				</Route>
				<Route history={this.history} path="/fullscreen" photosData={this.photosData} component={ShowFullscreen}></Route>
				<Route history={this.history} exact path="/">
					<Redirect to="/home"></Redirect>
				</Route>
			</Switch>
		)
	}
	
}

let mapStateToProps = (state) => {
	return {
		photosData: state
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addPhoto: (photo) => dispatch(addPhoto(photo)),
		login: () => dispatch(login())
	}
}

UnsplashApp = connect(
	mapStateToProps,
	mapDispatchToProps
)(UnsplashApp);

export default withRouter(UnsplashApp);
