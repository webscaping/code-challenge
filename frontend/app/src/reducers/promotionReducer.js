import { FETCH_PROMOTIONS } from '../actions/types';
import { mapKeys } from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_PROMOTIONS:
            return { ...state, ...mapKeys(action.payload, 'id') };
        default:
            return state;
    }
}