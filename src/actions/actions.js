export let addPhoto = (photo) => {
	return {
		type: "RECEIVE_PHOTOS_LIST",
		photo
	}
}

export let login = (code) => {
	return {
		type: "AUTH",
		code
	}
}