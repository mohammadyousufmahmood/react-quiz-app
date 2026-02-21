import { useState } from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import questions from "../questions";

function Question({ handleSelectedAnswer, activeQuestionIndex }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    answerState: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.answerState !== null) {
    timer = 2000;
  }
  function onSelectAnswer(selectedAnswer) {
    setAnswer({
      selectedAnswer,
      answerState: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer,
        answerState:
          selectedAnswer === questions[activeQuestionIndex].answers[0],
      });

      setTimeout(() => {
        handleSelectedAnswer(selectedAnswer);
      }, 2000);
    }, 1000);
  }
  let answerState = "";

  if (answer.selectedAnswer && answer.answerState !== null) {
    answerState = answer.answerState === true ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={() => { if (answer.selectedAnswer === "") handleSelectedAnswer(null)}}
        mode={answerState}
      />
      <h2>{questions[activeQuestionIndex].text}</h2>
      <Answers
        answers={questions[activeQuestionIndex].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}

export default Question;
