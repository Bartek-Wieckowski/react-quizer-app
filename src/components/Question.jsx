import PropTypes from "prop-types";
import Answers from "./Answers";
Question.propTypes = {
  question: PropTypes.object,
};

export default function Question({ question }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Answers question={question} />
    </div>
  );
}
