import PropTypes from 'prop-types';
import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.options('good')}>Good</button>
        <button onClick={() => this.props.options('neutral')}>Neutral</button>
        <button onClick={() => this.props.options('bad')}>Bad</button>
      </div>
    );
  }
}
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.func,
};
