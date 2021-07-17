import {createApi} from "unsplash-js";
import {addPhotosList} from "../actions/actions.js";

const unsplash = createApi({
    "accessKey": "tislRE5tcfRlNjGf805hJ_vf917iV08JcjtfLWsdQ4w"
});

export default async function getPhotosFromUnsplash (dispatch) {
    const resault = await unsplash.photos.list()
        .then(res => {
            return res.response;
        });
    console.log(resault);
    dispatch(addPhotosList(resault));
}
