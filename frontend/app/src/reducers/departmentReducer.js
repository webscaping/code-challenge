import { FETCH_DEPARTMENTS } from '../actions/types';
import { mapKeys } from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_DEPARTMENTS:
            return { ...state, ...mapKeys(action.payload, 'id') };
        default:
            return state;
    }
}