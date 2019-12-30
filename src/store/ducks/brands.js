import {createReducer, createActions} from 'reduxsauce';

export const {Types, Creators} = createActions({
  addBrand: ['name'],
  removeBrand: ['id'],
});

const INITIAL_STATE = [{id: 0, name: 'Brahma - 1L'}];

const addBrand = (state = INITIAL_STATE, action) =>
  state.push({id: state.length, name: action.name});

const removeBrand = (state = INITIAL_STATE, action) =>
  state.filter(brand => (brand.id === action.id ? false : true));

export default createReducer(INITIAL_STATE, {
  [Types.ADD_BRAND]: addBrand,
  [Types.REMOVE_BRAND]: removeBrand,
});
