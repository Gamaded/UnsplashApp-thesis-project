import React from 'react';

import './ShowFeed.css';
import ShowFeedItem from './ShowFeedItem.js';

class ShowFeed extends React.Component {
	constructor(props) {
		super(props);
		this.unsplash = props.unsplash;
		this.addPhoto = props.addPhoto;
		this.like = props.like;
		this.unlike = props.unlike;
		this.state = {
			numberForAdaptive: null
		}
	}

	checkWindowWidth() {
		if (window.innerWidth > 1024) {
			console.log(this)
			this.setState({numberForAdaptive: 3})
		} else if (window.innerWidth <= 1024 && window.innerWidth > 575) {
			this.setState({numberForAdaptive: 2})
		} else if (window.innerWidth < 575) {
			this.setState({numberForAdaptive: 1})
		}
	}

	componentDidMount() {
		this.checkWindowWidth()
	}
	
	render() {
		window.onresize = () => {
			this.checkWindowWidth()
		}

		this.isAuth = this.props.isAuth;
		this.photosList = this.props.photosList;
		this.usersLikes = this.props.usersLikes;

		let columnA = [];
		let columnB = [];
		let columnC = [];

		for (let i = 0, j = 0; j < this.photosList.length; i++, j++) {
			i === this.state.numberForAdaptive ? i = 0 : i = i;

			switch (i) {
				case 0:
					columnA.push(this.photosList[j]);
					break;
				case 1:
					columnB.push(this.photosList[j]);
					break;
				case 2:
					columnC.push(this.photosList[j]);
					break;
			}
		}

		return(
			<div className="photos-feed">
				<ol className="photos-feed-container">
					 {columnA.map(item => {
				 		return (
 							<ShowFeedItem
 								key={item.id} 
 								item={item}
 								isAuth={this.isAuth}
 								addPhoto={this.addPhoto}
 								usersLikes={this.usersLikes}
 								like={this.like}
 								unlike={this.unlike}
 								unsplash={this.unsplash}/>
 						)
 					})}
				</ol>
				<ol className="photos-feed-container photos-feed-container-second">
					{columnB.map(item => {
				 		return (
 							<ShowFeedItem
 								key={item.id} 
 								item={item}
 								isAuth={this.isAuth}
 								addPhoto={this.addPhoto}
 								usersLikes={this.usersLikes}
 								like={this.like}
 								unlike={this.unlike}
 								unsplash={this.unsplash}/>
 						)
 					})}
				</ol>
				<ol className="photos-feed-container photos-feed-container-third">
					{columnC.map(item => {
				 		return (
 							<ShowFeedItem
 								key={item.id} 
 								item={item}
 								isAuth={this.isAuth}
 								addPhoto={this.addPhoto}
 								usersLikes={this.usersLikes}
 								like={this.like}
 								unlike={this.unlike}
 								unsplash={this.unsplash}/>
 						)
 					})}
				</ol>
			</div>
		)
	}
}

export default ShowFeed;
