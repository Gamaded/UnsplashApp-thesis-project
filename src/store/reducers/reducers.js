const initialState = {
    "photosList": [],
    "currentPhoto": {},
    "user": {
        "username": "Гость",
        "profile_image": {"medium": "https://www.meme-arsenal.com/memes/5eae5104f379baa355e031fa1ded886c.jpg"}
    },
    "usersLikes": [],
    "isAuth": false,
    "counter": 1
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
        state.counter++;
        for (let iter = 0; iter < action.photosList.length; iter++) {
            state.photosList.push(action.photosList[iter]);
        }
        return state;

    case "GET_USERS_LIKES":
        state.usersLikes = action.usersLikes;
        return state;

    case "I_LIKE_IT":
        action.photo.likes += 1;
        state.usersLikes.push(action.photo);
        return state;

    case "I_DONT_LIKE_IT":
        for (let iter = 0; iter < state.usersLikes.length; iter++) {
            if (action.photo.id === state.usersLikes[iter].id) {
                action.photo.likes -= 1;
                state.usersLikes.splice(iter, 1);
                break;
            }
        }
        return state;

    default: return state;
    }
}

export default appData;
