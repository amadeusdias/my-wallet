import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCoins } from '../redux/actions/coinsAction';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const { fecht } = this.props;
    fecht();
  }

  render() {
    return (
      <div>
        <Header />
        <WalletForm />
        <Table />
      </div>
    );
  }
}

Wallet.propTypes = {
  fecht: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispacth) => ({
  fecht: () => dispacth(fetchCoins()),

});

// const mapStateToProps = (state) => ({
//   currencie: state.wallet.currency,
// });

export default connect(null, mapDispatchToProps)(Wallet);
