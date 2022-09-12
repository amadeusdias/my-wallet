// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_COINS, SAVE_COINS, FAILED_REQUEST } from '../actions';

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
