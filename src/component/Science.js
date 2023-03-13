import { useState } from "react";
import scienceQuestions from "./jsonfiles/science.json";

export default function Science() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = scienceQuestions[currentQuestionIndex];
  const [count,setCount] = useState(0);

  const handleNextQuestion = () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked')?.value;
    if (selectedAnswer && currentQuestion.answer[selectedAnswer - 1].isTrue) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCount(count+1);
    } else {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <>
      {currentQuestion && (
        <div className="question_box">
          <h4>{currentQuestion.question}</h4>
          <div className="choices">
            {currentQuestion.answer.map((answerOption, index) => (
              <div key={index}>
             
                <input type="radio" name="answer" id={index + 1} value={index + 1} />
                <label htmlFor={index + 1}>{answerOption.answerText}</label>
              </div>
            ))}
            <button onClick={handleNextQuestion}>Submit</button>
          </div>
        </div>
      )}
      {!currentQuestion && 
      <div className="score">

        <h2>Science quiz</h2>
        <h4>You scored{(count/scienceQuestions.length)*100}</h4>
        
        {(count/scienceQuestions.length)*100 >=80  &&(
            
            <p className="green">You passed</p>
           )}
           {(count/scienceQuestions.length)*100 >=70 &&(
              
              <p className="green">good job</p>
             )}
             {(count/scienceQuestions.length)*100 < 70 &&(
              
              <p className={count < 19 ? 'red' : 'green'}>You failed</p>
             )}
    
        
        
      </div>}
    </>
  );
}
