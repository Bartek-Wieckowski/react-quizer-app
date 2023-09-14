import PropTypes from "prop-types";
Timer.propTypes = {
  dispatch: PropTypes.func,
  secondsRemaining: PropTypes.number,
};

import { useCallback, useEffect } from "react";

export default function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  const handleInterval = useCallback(() => {
    dispatch({ type: "tick" });
  }, [dispatch]);

  useEffect(() => {
    const idTimer = setInterval(handleInterval, 1000);

    return () => {
      clearInterval(idTimer);
    };
  }, [handleInterval]);

  return (
    <div className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
