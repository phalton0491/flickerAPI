import axios from 'axios'

export const FETCHED_IMAGES = 'FETCHED_IMAGES';
export const ERROR_FETCHING_IMAGES = 'ERROR_FETCHING_IMAGES';
export const GET_SINGLE_IMAGE = 'GET_SINGLE_IMAGE';

//please change this variable as mentioned in read me file
const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=32e6458d2f3905864ea435e944193101&format=json&nojsoncallback=1&auth_token=72157690869373223-874e794273499bb0&api_sig=e1a318fe9e8830129711bb6d145fd199'

export const fetchImages = () => {

    const req = axios.post(url);

    return dispatch => {
        req.then(({data}) => {
                dispatch({
                type: FETCHED_IMAGES,
                payload: data.photos.photo
            })
        }).catch((e) => {
            dispatch({
                type: ERROR_FETCHING_IMAGES,
                payload: e
            })
        })
    }

};

export const getSingleImageFromStore = (image) => (
    {
        type: GET_SINGLE_IMAGE,
        payload: image
    }
)
