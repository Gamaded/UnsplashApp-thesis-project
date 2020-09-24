let photosData = (state, action) => {
	switch (action.type) {
		case 'RECEIVE_PHOTOS_LIST':
			state.photos = [
				...state.photos,
				action.photo
			];
			return state;
			break;

		case 'AUTH':
			state.isAuth = "true";
			return state;
			break;

		default: return state;
	}
}

export default photosData;