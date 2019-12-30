import {combineReducers} from 'redux';

import orders from './orders';
import brands from './brands';

const rootReducer = combineReducers({
  orders,
  brands,
});

export default rootReducer;
