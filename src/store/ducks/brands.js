import {createReducer, createActions} from 'reduxsauce';

/**
 * Estou criando os types utilizando um helper do reduxsauce
 * No fim ele irá gerar pra gente essas variaveis:
 * Types.ADD_BRAND
 * Types.REMOVE_BRAND
 */
export const {Types, Creators} = createActions({
  addBrand: ['name'],
  removeBrand: ['id'],
});

/**
 * Aqui eu declaro um state inicial pras brands, no caso eu coloquei um item, mas poderia ter mais ou estar vazio.
 * Pode ser um array, string, int, boolean, a porra toda.
 */
const INITIAL_STATE = [{id: 0, name: 'Brahma - 1L'}];

/**
 * Aqui eu crio as funções do meu redux, ou seja, adicionar, remover, editar e tudo mais
 */
const addBrand = (state = INITIAL_STATE, action) =>
  state.push({id: state.length, name: action.name});

const removeBrand = (state = INITIAL_STATE, action) =>
  state.filter(brand => (brand.id === action.id ? false : true));

/**
 * Aqui eu vinculo os types criados lá em cima com o helper com uma determinada função criada ai em cima
 */
export default createReducer(INITIAL_STATE, {
  [Types.ADD_BRAND]: addBrand,
  [Types.REMOVE_BRAND]: removeBrand,
});
