import PropTypes from "prop-types";
FinishScreen.propTypes = {
  points: PropTypes.number,
  maxPoints: PropTypes.number,
};
export default function FinishScreen({ points, maxPoints }) {
  const percentage = (points / maxPoints) * 100;
  return (
    <div>
      <p className="my-5 text-purple-400">
        Your scored <strong>{points}</strong> out of {maxPoints} ({Math.ceil(percentage)}%)
      </p>
    </div>
  );
}
