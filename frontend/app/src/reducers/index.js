import {
    combineReducers
} from 'redux';
import departmentReducer from './departmentReducer';
import productReducer from './productReducer';
import promotionReducer from './promotionReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    departments: departmentReducer,
    products: productReducer,
    promotions: promotionReducer,
    error: errorReducer,
});