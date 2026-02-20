import React, { useRef } from 'react'

function Answers({ answers, selectedAnswer, answerState, onSelect }) {
  const shuffledAnswersRef =  useRef();

  if(!shuffledAnswersRef.current){
   shuffledAnswersRef.current = [...answers];
  shuffledAnswersRef.current.sort(() => Math.random() - 0.5);
}

  return (
        <ul id="answers">
          {shuffledAnswersRef.current.map((answer) => {
            const isSelected = answer === selectedAnswer;
            let answerClass = "";
            if (answerState === "answered" && isSelected) {
              answerClass = "selected";
            }
            if ((answerState === "correct" || answerState === "wrong" )&& isSelected) {
              answerClass = answerState;
            }
            
            return (
              <li key={answer} className="answer">
                <button onClick={() => onSelect(answer)}
                  className={answerClass}
                  disabled= {answerState !== ""}
                  >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>

          )
}

export default Answers