import { createApi } from "unsplash-js";
import { getCookie } from "../../helpers";

const clid = {
  client_secret: "p5PHSSQPeNrXIES54icFqPiu-AAMDs9Bl8L3fgQ2gc0",
  redirect_uri: "http://localhost:3000/auth",
  client_id: "tislRE5tcfRlNjGf805hJ_vf917iV08JcjtfLWsdQ4w",
  grant_type: "authorization_code",
  accToken: getCookie("accToken")
};

const authorized = createApi({
  accessKey: `Bearer ${clid.accToken}`,
  headers: {
    Authorization: `Bearer ${clid.accToken}`
  }
});

const unAuthorized = createApi({
  accessKey: clid.client_id,
  headers: {
    client_id: clid.client_id
  }
});

const unsplash = clid.accToken ? authorized : unAuthorized;

export function getCode() {
  const authUrl = `https://unsplash.com/oauth/authorize?client_id=${clid.client_id}&redirect_uri=${clid.redirect_uri}&response_type=code&scope=public write_likes read_user`;
  window.location.assign(authUrl);
}

export async function getTokenReq(code: string) {
  const rawToken = await fetch(`https://unsplash.com/oauth/token?client_id=${clid.client_id}&client_secret=${clid.client_secret}&redirect_uri=${clid.redirect_uri}&code=${code}&grant_type=${clid.grant_type}`, {
    method: "POST"
  });
  const token = await rawToken.json();
  document.cookie = `accToken=${token.access_token}; path=/; max-age=2592000`;
  document.cookie = "login_status=logged_in; path=/; max-age=2592000";
  return token;
}

export async function getProfileReq(token: string) {
  const req = await fetch("https://api.unsplash.com/me", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const user = await req.json();
  return user;
}

export async function likePhotoReq(photoId: string) {
  const like = await fetch(`https://api.unsplash.com/photos/${photoId}/like`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${clid.accToken}`
    }
  });
  const likedPhoto = await like.json();
  return likedPhoto;
}

export async function unlikePhotoReq(photoId: string) {
  const like = await fetch(`https://api.unsplash.com/photos/${photoId}/like`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${clid.accToken}`
    }
  });
  const unlikedPhoto = await like.json();
  return unlikedPhoto;
}

export async function getPhotosFromUnsplashReq(counter: number) {
  const resault = await unsplash.photos.list({ page: counter, perPage: 24 });
  if (!resault.response) return;
  return resault.response.results;
}

export async function getCurrentPhotoReq(photoId: string) {
  const photo = await unsplash.photos.get({photoId});
  if (!photo.response) return;
  return photo.response;
}
