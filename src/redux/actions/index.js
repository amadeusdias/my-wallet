// Coloque aqui suas actions
export const LOG_IN = 'LOG_IN';
export const REQUEST_COINS = 'REQUEST_COINS';
export const SAVE_COINS = 'SAVE_COINS';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export function loginAction(username) {
  return {
    type: LOG_IN,
    payload: username,
  };
}
