import React from 'react';
import {connect} from 'react-redux';


class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.full_name}</h1>
        <h4>Message: {this.props.message}</h4>
      </div>
    )
  }
}

export default connect(({ full_name, message}) => ({full_name, message}))(Dashboard)
