let photosData = (state, action) => {
	switch (action.type) {
		case 'RECEIVE_PHOTOS_LIST':
			return [
				...state,
				action.photo
			]

		case 'AUTH':
			return {isAuth: action.code}

		default: return state;
	}
}

export default photosData;