const Feedback = ({ good, neutral, bad, totalFeedback, positivePercentage }) => {
  return (
    <div>
      {totalFeedback > 0 ? (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive percentage: {positivePercentage}%</p>
        </div>
      ) : (
        <p>No feedback given yet</p>
      )}
    </div>
  );
};

export default Feedback;