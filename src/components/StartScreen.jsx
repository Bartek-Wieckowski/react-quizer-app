import PropTypes from "prop-types";
StartScreen.propTypes = {
  questionsNum: PropTypes.number.isRequired,
  dispatch: PropTypes.func,
};

export default function StartScreen({ questionsNum, dispatch }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-indigo-400 text-2xl">check your knowledge</h2>
      <h3 className="text-indigo-400 text-md">{questionsNum} question to test you!</h3>
      <button
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        onClick={() => dispatch({ type: "start" })}
      >
        Let`s start
      </button>
    </div>
  );
}
