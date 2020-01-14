import {combineReducers} from 'redux';

//importo todos os reducers criados
import orders from './orders';
import brands from './brands';

//crio um rootReducer
const rootReducer = combineReducers({
  orders,
  brands,
});

//exporto tudo em um unico reducer
export default rootReducer;
