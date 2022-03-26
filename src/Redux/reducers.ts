import { GET_PHOTO, SET_LOADING, SET_PAGE, SET_QUERY } from "./constant";

interface IPhoto {
    id: number,
    width: number,
    height: number,
    url: string,
    photographer: string,
    photographer_url: string,
    photographer_id: number,
    avg_color: string,
    src: {
        original: string,
        large2x: string,
        large: string,
        medium: string,
        small: string,
        portrait: string,
        landscape: string,
        tiny: string
    },
    liked: boolean,
    alt: string
}

export interface IData {
    page: number,
    per_page: number,
    photos: IPhoto[],
    total_results: number,
    next_page: string,
    prev_page: string,
}

export interface IInitialState {
    data: IData,
    query: string,
    loading: boolean
}

const initialState: IInitialState = {
    data: {
        page: Number(localStorage.getItem('page')) || 1,
        per_page: 10,
        photos: [],
        total_results: 0,
        next_page: '',
        prev_page: ''
    },
    query: localStorage.getItem('query') || '',
    loading: false
};

export const rootReducer = (state = initialState, action: { type?: string, payload?: any }) => {
    switch (action.type) {
        case GET_PHOTO:
            return { ...state, data: { ...state.data, ...action.payload }, loading: true };
        case SET_PAGE:
            return { ...state, data: { ...state.data, page: action.payload } }
        case SET_QUERY:
            return { ...state, query: action.payload }
        case SET_LOADING:
            return { ...state, loading: action.payload };
        default:
            return state;
    }
}


