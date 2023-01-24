import {combineReducers} from 'redux';
import productList from './productsSlice';

const rootReducer = combineReducers({productList});

export default rootReducer;
