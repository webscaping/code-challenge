import { FETCH_PRODUCTS } from '../actions/types';
import { mapKeys } from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { ...state, ...mapKeys(action.payload, 'id') };
        default:
            return state;
    }
}