import PropTypes from 'prop-types';
import { Component } from 'react';

export class Notification extends Component {
  render() {
    return (
      <div>
        <p>{this.props.message}</p>
      </div>
    );
  }
}
Notification.propTypes = {
  message: PropTypes.string,
};
