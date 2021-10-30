import {Full as IUser} from "unsplash-js/dist/methods/users/types";
import { Full as IPhoto } from "unsplash-js/dist/methods/photos/types";

export type User = IUser;
export interface Photo extends IPhoto {
    liked_by_user: boolean;
};

export type DefaultUser = {
    username: string;
    profile_image: {
        medium: string;
    }
}

export type InitialState = {
    photosList: Photo[];
    currentPhoto: null | Photo;
    user: DefaultUser | User;
    isAuth: boolean;
    pageToGetPhotos: number;
}

export type Action<Payload> = {
    type: string;
    payload: Payload;
}