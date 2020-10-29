let appData = (state, action) => {
	switch (action.type) {
		case 'SET_CURRENT_PHOTO':
			state.currentPhoto = action.photo;
			return state;

		case 'AUTH':
			state.user = action.user;
			state.isAuth = true;
			return state;

		case "SET_PHOTOS_LIST":
			state.counter++;
			for (let i = 0; i < action.photosList.length; i++) {
				state.photosList.push(action.photosList[i]);
			}
			return state;

		case "GET_USERS_LIKES":
			state.usersLikes = action.usersLikes;
			return state;

		case "I_LIKE_IT":
			action.photo.likes += 1;
			state.usersLikes.push(action.photo);
			return state;

		case "I_DONT_LIKE_IT":
			for (let i = 0; i < state.usersLikes.length; i++) {
				if (action.photo.id === state.usersLikes[i].id) {
					action.photo.likes -= 1;
					state.usersLikes.splice(i, 1);
					break;
				}
			}
			return state;

		default: return state;
	}
}

export default appData;