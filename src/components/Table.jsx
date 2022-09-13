import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    const arredondar = (n) => (Math.round(n * 100) / 100).toFixed(2);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>
                Descrição
              </th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((gastos) => (
              <tr key={ gastos.id }>
                <td>{gastos.description}</td>
                <td>{gastos.tag}</td>
                <td>{gastos.method}</td>
                <td>{arredondar(gastos.value)}</td>
                <td>{gastos.exchangeRates[gastos.currency].name}</td>
                <td>{arredondar(gastos.exchangeRates[gastos.currency].ask)}</td>
                <td>
                  {(
                    gastos.value * gastos.exchangeRates[gastos.currency].ask).toFixed(2)}

                </td>
                <td>Real</td>

              </tr>
            )) }
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  // getCurrent: () => dispacth(fetchCurr()),

});

export default connect(mapStateToProps)(Table);
