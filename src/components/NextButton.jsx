import PropTypes from "prop-types";
NextButton.propTypes = {
  dispatch: PropTypes.func,
  answer: PropTypes.string,
  index: PropTypes.number,
  questionsNum: PropTypes.number,
};

export default function NextButton({ dispatch, answer, index, questionsNum }) {
  if (answer === null) return null;
  if (index < questionsNum - 1)
    return (
      <button
        className="block ml-auto text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === questionsNum - 1)
    return (
      <button
        className="block ml-auto text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}
