import PropTypes from 'prop-types';
import React from 'react';

const Notification = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
