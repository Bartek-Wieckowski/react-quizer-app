import PropTypes from "prop-types";
import Answers from "./Answers";
Question.propTypes = {
  question: PropTypes.object,
  dispatch: PropTypes.func,
  answer: PropTypes.string,
};

export default function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Answers question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
