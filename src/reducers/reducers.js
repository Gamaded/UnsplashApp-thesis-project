let photosData = (state, action) => {
	switch (action.type) {
		case 'RECEIVE_PHOTOS_LIST':
			return state.photos = [
				...state.photos,
				action.photo
			]

		// case 'AUTH':
		// 	console.log(state.isAuth)
			

		default: return state;
	}
}

export default photosData;