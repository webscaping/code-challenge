import { FETCH_PROMOTIONS, API_ERROR } from './types';
import { instance } from '../api/server';
import { PROMOTIONS_ROUTE } from '../api/routes';

export const fetchPromotions = () => async dispatch => {
    try {
        const response = await instance.get(PROMOTIONS_ROUTE);
        dispatch({
            type: FETCH_PROMOTIONS,
            payload: response.data.data
        })
    } catch (err) {
        dispatch({
            type: API_ERROR,
            payload: `Error fetching promotions. API returned: ${err}`
        })
    }
}