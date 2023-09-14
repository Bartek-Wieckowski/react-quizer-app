import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import ProgressBar from "./components/ProgressBar";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  secondsRemaining: null,
};

const TIME_PER_Q = 30;

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active", secondsRemaining: state.questions.length * TIME_PER_Q };
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
    case "finish":
      return { ...state, status: "finished" };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [{ questions, status, index, answer, points, secondsRemaining }, dispatch] = useReducer(
    reducer,
    initialState
  );
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
          <Footer>
            <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
            <NextButton dispatch={dispatch} answer={answer} index={index} questionsNum={questionsNum} />
          </Footer>
        </>
      )}
      {status === "finished" && <FinishScreen points={points} maxPoints={maxPoints} dispatch={dispatch} />}
    </Main>
  );
}

export default App;
