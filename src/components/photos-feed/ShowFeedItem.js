import React from 'react';
import {Link} from 'react-router-dom';

function ShowFeedItem(props) {
	const {item, isAuth, addPhoto, usersLikes} = props;

	console.log(usersLikes);

	let regexp = /[:T-]/g;
	let created = item.created_at.split(regexp).splice(0, 3);

	const month = {
		1: "Января",
		2: "Февраля",
		3: "Марта",
		4: "Апреля",
		5: "Мая",
		6: "Июня",
		7: "Июля",
		8: "Августа",
		9: "Сентября",
		10: "Октября",
		11: "Ноября",
		12: "Декабря"
	}

	function RedirectToFull() {
		if (isAuth === false) {
			return(
				<div className="show-full">
				</div>
			)
		} else {
			return(
				<Link to={{
					pathname: '/fullscreen'
				}}>
					<div className="show-full" onClick={() => {addPhoto(item)}}></div>
				</Link>
			)
		}

	}

	function Likes() {
		if (isAuth === false) {
			return(
				<div className="likes">
					<img className="heart-empty heart-shown" alt='i like it!' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABWElEQVQ4jc2UsUpcURRF13kzI5pCMJV2OpIEQb9B0liIGMgHiJ2MGIhYpbOL2vkBIlgLwcLCQmsViV0UtJCkC6SLYGGybK5ymYxRnxYeOM3e+6x77oX34LlXNAtqDegHLoGziLhs8qtAL1AFTpv9yIIdwDwwAnxLA6+ADWAhxT4B48AJ8AcYALaA+Yi4yE/tUHfUKbXI9Ir6Qd1MPaNWMr9QG+q22p4DF9Wp295FnVan/+M31M83b6Ye5ps9tNKmh2q1AOrAUUT8LQtMs8dAvQAqQK0sLKsaUBTAd6DvCYB9wI8iIn4Dv9TXZUnqG+BnRJxfC2PqyiOAq+pos/hFfVcC9l5db2W8VL+qww+AvU0zXbcFetQDdeIesMmU7b4r2Jmuv6a+aOG3q8vpU2y9WYuhQp1T99TBTB9S99VZ9Z8/1X3Ag+qu+jH1bn5AqVLb1KXUbY+Clakrp7kYeRvuWdYAAAAASUVORK5CYII="/>
					<div className="likes-counter">{item.likes}</div>
				</div>
			)
		} else {
			for (let i = 0; i < usersLikes.length; i++) {
				if (item.id === usersLikes[i].id) {
					return(
						<div className="likes">
							<img className="heart-filled heart-hided" alt='i have already liked it' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABvElEQVQ4jc3PP2hTURTH8e+5yUt8vhZtBxFBJUqxmM10qa1DBhfB1UUsFKQRwcVNUMzQuUMVadxd3ESdBAkodLDRQSu2FASraXFIppg/789xaBL02eefJIO/5d13zj0f7oH/PRIuZAorFgwfj2vct7c/fSzms164H5ORlK+eGd4qb4T7XXByYdN2nWYe1Tlgf7tcUSggzjyACWq3VJgDRtvDVeC+k4zni7OpRhecXNi03b2NZ8DU7mvICyUQkOndF9WXQ0nrbHE21TAArtPMR2EAip6JxgBkutbwbgNIprBiie77+sOaPUWg6mx/PmDEHzrWLwagMFI/eCRlYsYK+sU68SQIjCf2F8AfhJeo7SmbUu7QN9DiAMDny9cP183OWe70qwncbX93MrG0/hTkXC+YwpPSlbHzAKZTtOLuJWC9h7ettYLETOevCy5fTld8188qvP8H7Z1KK/v26tHqLyDAm2vjZcScBh7/BfYo1mKqlDu59dN7o25PLG3MgN4DnFCrLuiNV7mxRUQ0PBcJAmQKa+Oi5gFwql16rRJcLOVOfIia+S0IkH64mrAryXmA+mjz5uqFdOtPMwPNd/Isj5aD4sfMAAAAAElFTkSuQmCC"/>
							<div className="likes-counter">{item.likes}</div>
						</div>
					)
				} else if (i === usersLikes.length - 1) {
					return(
						<div className="likes">
							<img className="heart-empty heart-shown" alt='i like it!' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABWElEQVQ4jc2UsUpcURRF13kzI5pCMJV2OpIEQb9B0liIGMgHiJ2MGIhYpbOL2vkBIlgLwcLCQmsViV0UtJCkC6SLYGGybK5ymYxRnxYeOM3e+6x77oX34LlXNAtqDegHLoGziLhs8qtAL1AFTpv9yIIdwDwwAnxLA6+ADWAhxT4B48AJ8AcYALaA+Yi4yE/tUHfUKbXI9Ir6Qd1MPaNWMr9QG+q22p4DF9Wp295FnVan/+M31M83b6Ye5ps9tNKmh2q1AOrAUUT8LQtMs8dAvQAqQK0sLKsaUBTAd6DvCYB9wI8iIn4Dv9TXZUnqG+BnRJxfC2PqyiOAq+pos/hFfVcC9l5db2W8VL+qww+AvU0zXbcFetQDdeIesMmU7b4r2Jmuv6a+aOG3q8vpU2y9WYuhQp1T99TBTB9S99VZ9Z8/1X3Ag+qu+jH1bn5AqVLb1KXUbY+Clakrp7kYeRvuWdYAAAAASUVORK5CYII="/>
							<div className="likes-counter">{item.likes}</div>
						</div>
					)
				}
			}
		}
	}

	return (
		<li className="photos-feed-item">
			<img className="photos-feed-item__photo" alt={item.alt_description} src={item.urls.regular}/>
			<div className="photos-feed-item__props">
				<div className="author">
					<img className="author__avatar" alt="author's avatar" src={item.user.profile_image.medium}/>
					<div className="author__name"><a href={item.user.links.html} target="_blank" rel="noopener noreferrer">{item.user.username}</a></div>
				</div>
				<div className="date-likes-container">
					<div className="date">{`${created[2]} ${month[created[1]]} ${created[0]}`}</div>
					<Likes />
				</div>
			</div>
			<RedirectToFull />
		</li>
	)
}

export default ShowFeedItem;
