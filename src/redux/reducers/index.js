import { combineReducers } from 'redux';
import user from './user';
import despesasReducer from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const rootReducer = combineReducers({ user, despesasReducer });

export default rootReducer;
