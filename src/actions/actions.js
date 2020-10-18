export let addPhoto = (photo) => {
	return {
		type: 'SET_CURRENT_PHOTO',
		photo
	}
}

export let login = (user) => {
	return {
		type: "AUTH",
		user
	}
}

export let addPhotosList = (photosList) => {
	return {
		type: "SET_PHOTOS_LIST",
		photosList
	}
}

export let getUsersLikes = (usersLikes) => {
	return {
		type: "GET_USERS_LIKES",
		usersLikes
	}
}

export let like = (photo) => {
	return {
		type: "I_LIKE_IT",
		photo
	}
}

export let unlike = (photo) => {
	return {
		type: "I_DONT_LIKE_IT",
		photo
	}
}