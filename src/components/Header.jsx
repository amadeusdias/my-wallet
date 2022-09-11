import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div>Header</div>
    );
  }
}

const mapStateToProps = () => {};

export default connect(mapStateToProps)(Header);
