import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveCurrencies } from '../redux/actions/coinsAction';
import { fetchCurrencies } from './api';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: ' ',
      exchangeRates: {},
    };
  }

  handleSubmmit = async (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    const data = await fetchCurrencies();
    this.setState({
      exchangeRates: data,
    });
    dispatch(saveCurrencies(this.state));
    this.nState();
  };

  nState = () => {
    const { id } = this.state;
    this.setState({
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'alimentação',
      description: '',
      value: '',
      id: id + 1,
    });
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { currenciesArr } = this.props;
    const { currency, method, tag, description, value } = this.state;
    return (
      <div>
        <form id="walletForm">
          <label htmlFor="despesa">
            <input
              id="despesa"
              name="value"
              type="number"
              onChange={ this.handleChange }
              value={ value }
              data-testid="value-input"
            />
            Valor da Despesa

          </label>
          <label htmlFor="description">
            <input
              type="text"
              name="description"
              onChange={ this.handleChange }
              value={ description }
              data-testid="description-input"
              id="description"
            />
            Descrição

          </label>

        </form>
        <label htmlFor="currencies">
          Currencies:
          <select
            name="currency"
            data-testid="currency-input"
            value={ currency }
            onChange={ this.handleChange }
            id="currencie"
            form="walletForm"
          >
            {' '}
            {currenciesArr.map((coin) => (

              <option key={ coin }>{coin}</option>
            ))}
          </select>

        </label>
        <label htmlFor="method">
          Metodo de Pagamento
          <select
            name="method"
            onChange={ this.handleChange }
            value={ method }
            id="method"
            data-testid="method-input"
            form="walletForm"
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select
            name="tag"
            data-testid="tag-input"
            id="tag"
            value={ tag }
            onChange={ this.handleChange }
            form="walletForm"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saude">Saúde</option>
          </select>
        </label>

        <button
          type="button"
          id="submmit"
          name="submmit"
          onClick={ this.handleSubmmit }
          form="walletForm"
        >
          Adicionar Despesa

        </button>

      </div>
    );
  }
}

WalletForm.propTypes = {
  currenciesArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currenciesArr: state.wallet.currencies,
  // getCurrent: () => dispacth(fetchCurr()),

});

export default connect(mapStateToProps)(WalletForm);
