import { FETCH_DEPARTMENTS, API_ERROR } from './types';
import { instance } from '../api/server'
import { DEPARTMENTS_ROUTE } from '../api/routes';

export const fetchDepartments = () => async dispatch => {
    try {
        const response = await instance.get(DEPARTMENTS_ROUTE);

        dispatch({
            type: FETCH_DEPARTMENTS,
            payload: response.data.data,
        });
    } catch (err) {
        dispatch({
            type: API_ERROR,
            payload: `Error fetching departments. API returned: ${err}`
        });
    }
}