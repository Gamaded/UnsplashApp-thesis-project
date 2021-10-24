export function addPhoto (photo) {
    return {
        "type": "SET_CURRENT_PHOTO",
        payload: photo
    };
}

export function setAuth () {
    return {
        "type": "AUTH"
    };
}

export function setProfile (user) {
    return {
        "type": "SET_PROFILE",
        payload: user
    };
}

export function addPhotosList (photosList) {
    return {
        "type": "SET_PHOTOS_LIST",
        payload: photosList
    };
}

export function like (photo) {
    return {
        "type": "I_LIKE_IT",
        payload: photo
    };
}

export function unlike (photo) {
    return {
        "type": "I_DONT_LIKE_IT",
        payload: photo
    };
}
