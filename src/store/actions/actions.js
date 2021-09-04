export function addPhoto (photo) {
    return {
        "type": "SET_CURRENT_PHOTO",
        photo
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
        user
    };
}

export function addPhotosList (photosList) {
    return {
        "type": "SET_PHOTOS_LIST",
        photosList
    };
}

export function like (photo) {
    return {
        "type": "I_LIKE_IT",
        photo
    };
}

export function unlike (photo) {
    return {
        "type": "I_DONT_LIKE_IT",
        photo
    };
}
