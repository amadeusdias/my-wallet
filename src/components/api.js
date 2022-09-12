export const CURRENCIES_API = 'https://economia.awesomeapi.com.br/json/all';

export const fetchCurrencies = async () => {
  const response = await fetch(CURRENCIES_API);
  const data = await response.json();
  return data;
};
