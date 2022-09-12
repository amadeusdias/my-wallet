import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCoins } from '../redux/actions/coinsAction';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

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
      </div>
    );
  }
}

Wallet.propTypes = {
  fecht: PropTypes.func.isRequired,
};

const mapStateToProps = (dispacth) => ({
  fecht: () => dispacth(fetchCoins()),

});

export default connect(null, mapStateToProps)(Wallet);
