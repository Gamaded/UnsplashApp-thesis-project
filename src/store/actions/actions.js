export function addPhoto (photo) {
    return {
        "type": "SET_CURRENT_PHOTO",
        photo
    };
}

export function login (user) {
    return {
        "type": "AUTH",
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
