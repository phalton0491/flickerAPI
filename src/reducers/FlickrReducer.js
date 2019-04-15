import {
    FETCHED_IMAGES,
    ERROR_FETCHING_IMAGES,
    GET_SINGLE_IMAGE
} from "../actions/flickrActions";

const initialState = {
    fetchedImages: [],
    errorFetchingImage: '',
    singleImage : {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHED_IMAGES:
            return {...state, fetchedImages: action.payload};

        case ERROR_FETCHING_IMAGES:
            return;

        case GET_SINGLE_IMAGE:
            return { ...state,  singleImage: action.payload};

        default:
            return state
    }
};