import PropTypes from "prop-types";
Answers.propTypes = {
  question: PropTypes.object,
};

export default function Answers({ question }) {
  return (
    <div className="flex flex-col justify-center">
      {Object.values(question.answers).map((value) => (
        <button
          key={value}
          className="max-w-md text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 hover:ml-4 focus:ring-4 focus:outline-none focus:ring-purple-300  focus:bg-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 block"
        >
          {value}
        </button>
      ))}
    </div>
  );
}
