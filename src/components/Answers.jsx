import PropTypes from "prop-types";
Answers.propTypes = {
  question: PropTypes.object,
  dispatch: PropTypes.func,
  answer: PropTypes.string,
};

export default function Answers({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="flex flex-col items-center justify-center">
      {Object.entries(question.answers).map(([key, value]) => (
        <button
          key={value}
          onClick={() => dispatch({ type: "newAnswer", payload: key })}
          className={`max-w-md w-full text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 hover:ml-4 focus:ring-4 focus:outline-none focus:ring-purple-300  focus:bg-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 block ${
            hasAnswered
              ? question.correct_answer === answer && question.correct_answer === key
                ? "bg-teal-400 dark:text-black dark:hover:bg-transparent pointer-events-none"
                : question.correct_answer !== key
                ? "bg-rose-400 dark:hover:bg-transparent pointer-events-none opacity-50"
                : "bg-teal-400 dark:text-black dark:hover:bg-transparent pointer-events-none"
              : ""
          }`}
          disabled={hasAnswered}
        >
          {value}
        </button>
      ))}
    </div>
  );
}
