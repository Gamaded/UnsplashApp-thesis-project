const initialState = {
    "photosList": [],
    "currentPhoto": {},
    "user": {
        "username": "Гость",
        "profile_image": {"medium": "https://www.meme-arsenal.com/memes/5eae5104f379baa355e031fa1ded886c.jpg"}
    },
    "userLikes": [],
    "isAuth": false,
    "pageToGetPhotos": 1
};

function appData (state = initialState, action) {
    switch (action.type) {
    case "SET_CURRENT_PHOTO":
        state.currentPhoto = action.photo;
        return state;

    case "AUTH":
        state.user = action.user;
        state.isAuth = true;
        return state;

    case "SET_PHOTOS_LIST":
        state.pageToGetPhotos++;
        state.photosList = state.photosList.concat(action.photosList);
        return state;

    case "I_LIKE_IT":
        console.log(action.photo);
        return state;

    case "I_DONT_LIKE_IT":
        console.log(action.photo);
        return state;

    default: return state;
    }
}

export default appData;
