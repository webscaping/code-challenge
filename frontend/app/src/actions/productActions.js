import { instance } from '../api/server';
import { FETCH_PRODUCTS, API_ERROR } from './types';
import { PRODUCTS_ROUTE } from '../api/routes';
export const fetchProducts = () => async dispatch => {
    try {
        const response = await instance.get(PRODUCTS_ROUTE);

        dispatch({
            type: FETCH_PRODUCTS,
            payload: response.data.data,
        });
    } catch (err) {
        dispatch({
            type: API_ERROR,
            payload: `Error fetching products. API returned: ${err}`
        });
    }
}