import { REQUEST_COINS,
  DELETE_EXPENSE, SAVE_COINS, FAILED_REQUEST, GET_CURRENCIES } from '.';
import { fetchCurrencies } from '../../components/api';

export const requestCoins = () => ({
  type: REQUEST_COINS,
});

export const saveCoins = (data) => ({
  type: SAVE_COINS,
  payload: data,
});

export const saveCurrencies = (data) => ({
  type: GET_CURRENCIES,
  payload: data,
});

export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  payload: error,
});

export const deleteExpanse = (id) => ({
  type: DELETE_EXPENSE,
  id,
});

export const fetchCoins = () => async (dispatch) => {
  dispatch(requestCoins());

  try {
    const coins = await fetchCurrencies();
    if (!coins) throw new Error('Não foi possivel fazer a requisição');
    dispatch(saveCoins(coins));
  } catch (error) {
    dispatch(failedRequest(error.message));
  }
};
