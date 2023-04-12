import PropTypes from 'prop-types';
import { Component } from 'react';

export class Section extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
