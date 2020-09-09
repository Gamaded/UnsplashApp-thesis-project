export let addPhoto = (photo) => {
	return {
		type: "RECEIVE_PHOTOS_LIST",
		photo
	}
}

// export let login = () => {
// 	return {
// 		type: "AUTH"
// 	}
// }