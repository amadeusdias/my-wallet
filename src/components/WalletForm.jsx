import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { fetchCoins } from '../redux/actions/coinsAction';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      // currencies: 'USD',
      // method: 'Dinheiro',
      // tag: 'alimentação',

    };
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { currenciesArr } = this.props;
    return (
      <div>
        <form id="walletForm">
          <label htmlFor="despesa">
            <input
              id="despesa"
              type="number"
              data-testid="value-input"
            />
            Valor da Despesa

          </label>
          <label htmlFor="description">
            <input
              type="text"
              data-testid="description-input"
              id="description"
            />
            Descrição

          </label>

        </form>
        <label htmlFor="currencies">
          Currencies:
          <select
            name="currencie"
            data-testid="currency-input"
            onChange={ this.handleChange }
            id="currencie"
            form="walletForm"
          >
            {' '}
            {console.log(currenciesArr)}
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
            id="method"
            data-testid="method-input"
            form="walletForm"
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão De débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select
            name="tag"
            data-testid="tag-input"
            id="tag"
            onChange={ this.handleChange }
            form="walletForm"
          >
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currenciesArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currenciesArr: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
