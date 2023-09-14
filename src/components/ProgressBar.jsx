import PropTypes from "prop-types";
ProgressBar.propTypes = {
  questionsNum: PropTypes.number,
  index: PropTypes.number,
  points: PropTypes.number,
  maxPoints: PropTypes.number,
};

export default function ProgressBar({ index, questionsNum, points, maxPoints }) {
  console.log(maxPoints);
  return (
    <div className="">
      <progress className="block mx-auto my-4" value={points} max={maxPoints}></progress>
      <div className="flex justify-between max-w-2xl">
        <p className="text-teal-200">
          Question <strong>{index + 1}</strong>/{questionsNum}
        </p>
        <p className="text-teal-200">
          <strong>{points}</strong>/{maxPoints} points
        </p>
      </div>
    </div>
  );
}
