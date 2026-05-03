import quizCompleteImg from "../assets/quiz-complete.png";


export default function Summary() {
  return (
    <>
          <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
        <div id="summary-stats">
            <p>
                <span className="number">10%</span>
                <span className="text">Skipped Answers</span>
            </p>
            <p>
                <span className="number">10%</span>
                <span className="text">Correct Answers</span>
            </p>
            <p>
                <span className="number">10%</span>
                <span className="text">Incorrect Answers</span>
            </p>
        </div>
        <ol>
            <li>    
                <h3>Question 1</h3>
                <p className="question">question</p>
                <p className="user-correct">user's answer</p>
            </li>
        </ol>
      </div>
    </>
  );
}