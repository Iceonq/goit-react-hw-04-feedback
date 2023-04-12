import { useState, useEffect } from 'react';
import Statistics from './Statistics/Statistics.jsx';
import Section from './Section/Section.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import PropTypes from 'prop-types';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const [total, setTotal] = useState(0);

  const handleFeedbackIncrement = type => {
    setFeedback(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  useEffect(() => {
    setTotal(feedback.neutral + feedback.good + feedback.bad);
  }, [feedback.neutral, feedback.good, feedback.bad]);

  const countPositiveFeedbackPercentage = () => {
    if (total === 0) {
      return 0;
    }
    return Math.round((feedback.good / total) * 100);
  };

  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();
  return (
    <div>
      <h1>Please leave feedback</h1>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positiveFeedbackPercentage={positiveFeedbackPercentage}
          />
        )}
      </Section>
      <FeedbackOptions options={handleFeedbackIncrement} />
    </div>
  );
};

export default App;

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedbackPercentage: PropTypes.string,
};
