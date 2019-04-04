import React from 'react';
import './FinishedQuiz.css';
import Button from './../UI/Button/Button';

const FinishedQuiz = (props) => {

  const successCount = Object.keys(props.results).reduce((total, key) => {
    if(props.results[key] === "success") {
      total++;
    }
    return total;
  }, 0);

  return (
    <div className="finished-quiz">
       <ul>
        {props.quiz.map((quizItem, index, array) => {
          let cls = [
            "fa",
            props.results[quizItem.id] === "error" ? "fa-times" : "fa-check",
            props.results[quizItem.id] === "error" ? "error" : "success"
          ];

          return (
            <li key={index}>
              <span>{index + 1}</span>.&nbsp;
              {quizItem.question}
              <i className={cls.join(" ")} />
            </li>
          )
        })}
      </ul>

      <p>Правильно {successCount} из {props.quiz.length}</p>

      <div>
        <Button onClick={props.onRepead} type="button primary-button">
          Повторить
        </Button>
        <Button onClick={props.onRepead} type="button success-button">
          Перейти в список тестов
        </Button>
      </div>
    </div>
  );
}

export default FinishedQuiz;
