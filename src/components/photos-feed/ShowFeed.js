import React from 'react';

import './ShowFeed.css';
import ShowFeedItem from './ShowFeedItem.js';

class ShowFeed extends React.Component {
	constructor(props) {
		super(props);
		this.unsplash = props.unsplash;
		this.addPhoto = props.addPhoto;
	}
	
	render() {
		this.isAuth = this.props.isAuth;
		this.photosList = this.props.photosList;
		this.usersLikes = this.props.usersLikes;

		for (let i = 0, j = 0; j < this.photosList.length; i++, j++) {
			i === 3 ? i = 0 : i = i;

			switch (i) {
				case 0:
					this.photosList[j].column = "a";
					break;
				case 1:
					this.photosList[j].column = "b";
					break;
				case 2:
					this.photosList[j].column = "c";
					break;
			}
		} 

		console.log(this.photosList)

		return(
			<div className="photos-feed">
				<ol className="photos-feed-container">
					 {this.photosList.map(item => {
					 	if (item.column === "a") {
					 		return (
	 							<ShowFeedItem
	 								key={item.id} 
	 								item={item}
	 								isAuth={this.isAuth}
	 								addPhoto={this.addPhoto}
	 								usersLikes={this.usersLikes}/>
	 						)
					 	}
 					})}
				</ol>
				<ol className="photos-feed-container">
					{this.photosList.map(item => {
					 	if (item.column === "b") {
					 		return (
	 							<ShowFeedItem
	 								key={item.id} 
	 								item={item}
	 								isAuth={this.isAuth}
	 								addPhoto={this.addPhoto}
	 								usersLikes={this.usersLikes}/>
	 						)
					 	}
 					})}
				</ol>
				<ol className="photos-feed-container">
					{this.photosList.map(item => {
					 	if (item.column === "c") {
					 		return (
	 							<ShowFeedItem
	 								key={item.id} 
	 								item={item}
	 								isAuth={this.isAuth}
	 								addPhoto={this.addPhoto}
	 								usersLikes={this.usersLikes}/>
	 						)
					 	}
 					})}
				</ol>
					{
						// this.photosList.map(item => {
						// 	return (
						// 		<ShowFeedItem
						// 			key={item.id} 
						// 			item={item}
						// 			isAuth={this.isAuth}
						// 			addPhoto={this.addPhoto}
						// 			usersLikes={this.usersLikes}/>
						// 	)
						// })
					}
				
			</div>
		)
	}
}

export default ShowFeed;
