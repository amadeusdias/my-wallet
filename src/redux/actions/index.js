// Coloque aqui suas actions
export const LOG_IN = 'LOG_IN';
const ADD_MONEY = 'ADD_MONEY';

export function loginAction(username) {
  return {
    type: LOG_IN,
    payload: username,
  };
}

export function addDolar() {
  return {
    type: ADD_MONEY,

  };
}
