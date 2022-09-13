// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_COINS,
  SAVE_COINS, FAILED_REQUEST, GET_CURRENCIES, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
  error: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_COINS: return {
    ...state,
    loading: true,
  };
  case SAVE_COINS: return {
    ...state,
    currencies: Object.keys(action.payload).filter((coin) => coin !== 'USDT'),
  };
  case GET_CURRENCIES: return {
    ...state,
    expenses: [...state.expenses, action.payload],
  };
  case DELETE_EXPENSE: return {
    ...state,
    expenses: state.expenses.filter((c) => c.id !== action.id),
  };
  case FAILED_REQUEST:
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
