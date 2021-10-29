export type DefaultUser = {
    unauth: boolean;
    username: string;
    profile_image: {
        medium: string;
    }
}

export type User = any;

export type Photo = any;

export type InitialState = {
    photosList: Photo[];
    currentPhoto: Photo;
    user: DefaultUser | User;
    isAuth: boolean;
    pageToGetPhotos: number;
}

export type Action<Payload> = {
    type: string;
    payload: Payload;
}