import React from 'react';
import Unsplash from 'unsplash-js';
import {connect} from 'react-redux';
import {
	Route,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom';

import {addPhoto, login, getUsersLikes, addPhotosList, like, unlike} from '../actions/actions.js';

import ShowFullscreen from '../components/fullscreen-viewing/ShowFullscreen.js';
import ShowFeed from '../components/photos-feed/ShowFeed.js';
import Header from '../components/header/Header.js';
import Popup from '../components/Popup/Popup.js';

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
		this.appData = props.appData;
		this.login = props.login;
		this.addPhoto = props.addPhoto;
		this.getUsersLikes = props.getUsersLikes;
		this.addPhotosList = props.addPhotosList;
		this.like = props.like;
		this.unlike = props.unlike;
		this.state = {
			popup: false
		}
	}

	help() {
		console.log(this);
	}
	
	componentDidMount() {
		unsplash.photos.listPhotos(1, 10)
			.then(res => res.json())
			.then(json => {
				this.addPhotosList(json);
				this.setState(this.appData);
			});

		if (code !== undefined) {
			unsplash.auth.userAuthentication(code)
				.then(res => res.json())
				.then(json => {
					unsplash.auth.setBearerToken(json.access_token);
					if (unsplash._bearerToken !== undefined) {
						unsplash.currentUser.profile()
							.then(res => res.json())
							.then(json => {
								this.login(json);
								unsplash.users.likes(json.username)
									.then(res => res.json())
									.then(json => {
										console.log(json)
										this.getUsersLikes(json);
										this.setState(this.appData);
										console.log(this.appData)
									})
							})
					}
				})
		}
	};
	
	render() {
		console.log(this.appData.usersLikes)
		this.help()
		return (
			<Switch>
				<Route history={this.history} exact path="/home">
					<Header unsplash={unsplash} user={this.appData.user} isAuth={this.appData.isAuth}/>
					<main  	onClick={(event) => {
								if (this.appData.isAuth === false && event.target.className === "show-full") {
									this.setState({
										popup: true
									})
								}
							}}>
						<ShowFeed isAuth={this.appData.isAuth} 
								  photosList={this.appData.photosList} 
								  addPhoto={this.addPhoto}
								  usersLikes={this.appData.usersLikes}
								  help={this.help} />
						<Popup popup={this.state.popup} onClick={() => {
							alert('fuck me')
						}}/>
					</main>
				</Route>
				<Route history={this.history} path="/fullscreen">
					<ShowFullscreen unsplash={unsplash} 
									appData={this.appData}
									like={this.like}
									unlike={this.unlike}/>
				</Route>
				<Route history={this.history} exact path="/">
					<Redirect to="/home"></Redirect>
				</Route>
			</Switch>
		)
	}
	
}

let mapStateToProps = (state) => {
	return {
		appData: state
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addPhotosList: (photosList) => dispatch(addPhotosList(photosList)),
		addPhoto: (photo) => dispatch(addPhoto(photo)),
		login: (user) => dispatch(login(user)),
		getUsersLikes: (usersLikes) => dispatch(getUsersLikes(usersLikes)),
		like: (photo) => dispatch(like(photo)),
		unlike: (photo) => dispatch(unlike(photo))
	}
}

UnsplashApp = connect(
	mapStateToProps,
	mapDispatchToProps
)(UnsplashApp);

export default withRouter(UnsplashApp);
