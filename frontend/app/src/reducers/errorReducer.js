import { API_ERROR } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case API_ERROR:
            return { message: action.payload };
        default: return state;
    }
}