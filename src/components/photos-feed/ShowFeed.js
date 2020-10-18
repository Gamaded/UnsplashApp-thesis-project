import React from 'react';

import './ShowFeed.css';
import ShowFeedItem from './ShowFeedItem.js';

class ShowFeed extends React.Component {
	constructor(props) {
		super(props);
		this.unsplash = props.unsplash;
		this.addPhoto = props.addPhoto;
		this.help = props.help;
	}
	
	render() {
		this.isAuth = this.props.isAuth;
		this.photosList = this.props.photosList;
		this.usersLikes = this.props.usersLikes;

		return(
			<ol className="photos-feed-container" onClick={() => {this.help()}}>
				{
					this.photosList.map(item => {
						return (
							<ShowFeedItem
								key={item.id} 
								item={item}
								isAuth={this.isAuth}
								addPhoto={this.addPhoto}
								usersLikes={this.usersLikes}/>
						)
					})
				}
			</ol>
		)
	}
}

export default ShowFeed;
