import { User, Photo, Action } from "../reducers/types";

export function addPhoto <Payload>(photo: Photo): Action<Payload> {
    return {
        "type": "SET_CURRENT_PHOTO",
        payload: photo
    };
}

export function setAuth (): {type: string} {
    return {
        "type": "AUTH"
    };
}

export function setProfile <Payload>(user: User): Action<Payload> {
    return {
        "type": "SET_PROFILE",
        payload: user
    };
}

export function addPhotosList <Payload>(photosList: Photo[]): Action<Payload[]> {
    return {
        "type": "SET_PHOTOS_LIST",
        payload: photosList
    };
}

export function like <Payload>(photo: Photo): Action<Payload> {
    return {
        "type": "I_LIKE_IT",
        payload: photo
    };
}

export function unlike <Payload>(photo: Photo): Action<Payload> {
    return {
        "type": "I_DONT_LIKE_IT",
        payload: photo
    };
}
