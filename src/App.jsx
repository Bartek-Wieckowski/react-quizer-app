import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import ProgressBar from "./components/ProgressBar";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer": {
      const q = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points: action.payload === q.correct_answer ? state.points + q.points : state.points,
      };
    }
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(reducer, initialState);
  const questionsNum = questions.length;

  const arrPoints = Object.values(questions).map((q) => q.points);
  const maxPoints = arrPoints.reduce((acc, curr) => acc + curr, 0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch(`http://localhost:8000/questions`);
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({ type: "dataFailed" });
      }
    };
    fetchQuestions();
  }, []);

  return (
    <Main>
      <Header />
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && <StartScreen questionsNum={questionsNum} dispatch={dispatch} />}
      {status === "active" && (
        <>
          <ProgressBar index={index} questionsNum={questionsNum} points={points} maxPoints={maxPoints} />
          <Question question={questions[index]} dispatch={dispatch} answer={answer} />
          <NextButton dispatch={dispatch} answer={answer} />
        </>
      )}
    </Main>
  );
}

export default App;
