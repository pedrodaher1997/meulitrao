import {createReducer, createActions} from 'reduxsauce';

export const {Types, Creators} = createActions({
  addOrder: ['order'],
  removeOrder: ['id'],
  removeOrderItem: ['itemId'],
});

const INITIAL_STATE = [
  {
    id: 0,
    name: 'Pedro Entringer',
    received: true,
    phone: '27981670051',
    items: [
      {id: 0, item: 'Brahma - 1L', quantity: 5, received: true},
      {id: 1, item: 'Brahma - Latão', quantity: 1, received: true},
    ],
  },
  {
    id: 0,
    name: 'Pedro Entringer',
    received: true,
    phone: '27981670051',
    items: [
      {id: 0, item: 'Brahma - 1L', quantity: 5, received: false},
      {id: 1, item: 'Brahma - Latão', quantity: 1, received: true},
    ],
  },
  {
    id: 0,
    name: 'Pedro Entringer',
    received: false,
    phone: '27981670051',
    items: [
      {id: 0, item: 'Brahma - 1L', quantity: 5, received: true},
      {id: 1, item: 'Brahma - Latão', quantity: 1, received: true},
    ],
  },
];

const addOrder = (state = INITIAL_STATE, action) => [
  ...state,
  {...action.order, id: state.length},
];

const removeOrder = (state = INITIAL_STATE, action) =>
  state.filter(order => (order.id === action.id ? false : true));

const removeOrderItem = (state = INITIAL_STATE, action) => ({
  ...state,
  items: state.items.filter(item => (item.id === action.itemId ? false : true)),
});

export default createReducer(INITIAL_STATE, {
  [Types.ADD_ORDER]: addOrder,
  [Types.REMOVE_ORDER]: removeOrder,
  [Types.REMOVE_ORDER_ITEM]: removeOrderItem,
});
