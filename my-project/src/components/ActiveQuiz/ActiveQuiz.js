import React from 'react';
import './ActiveQuiz.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = (props) => (
  <div className="active-quiz">
    <p className="question">
      <span>
        <strong>3.</strong>&nbsp;
        Как дела?
      </span>

      <small>4 из 12</small>
    </p>

    <AnswersList answers={props.answers} />
  </div>
);

export default ActiveQuiz;
