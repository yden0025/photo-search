import { http } from "../utils/http";
import { GET_PHOTO, SET_LOADING, SET_PAGE, SET_QUERY } from "./constant";
import { IData } from "./reducers";

const getPhotos = (photos: IData) => ({ type: GET_PHOTO, payload: photos });
const setPages = (page: number) => ({ type: SET_PAGE, payload: page });
const setQuery = (query: string) => ({ type: SET_QUERY, payload: query });
const setLoading = (isLoading: boolean) => ({ type: SET_LOADING, payload: isLoading });

const fetchPhotos = () => {
    return async (dispatch: (arg0: { type: string; payload?: any }) => void, getState: Function) => {
        await dispatch(setLoading(true));
        const { page, per_page } = getState().data;
        const res = await http.get(`curated?page=${page}&per_page=${per_page}`);
        await dispatch(getPhotos(res.data));
        await dispatch(setLoading(false));
    }
}

const searchPhotos = (query: string) => {
    return async (dispatch: (arg0: { type: string; payload?: any }) => void, getState: Function) => {
        await dispatch(setLoading(true));
        const { page, per_page } = getState().data;
        const res = await http.get(`search?query=${query}&page=${page}&per_page=${per_page}`);
        await dispatch(getPhotos(res.data));
        await dispatch(setLoading(false));
    }
}

export { fetchPhotos, searchPhotos, setPages, setQuery, setLoading }