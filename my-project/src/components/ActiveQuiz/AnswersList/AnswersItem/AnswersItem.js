import React from 'react';
import './AnswersItem.css';

const AnswersItem = (props) => {
  let classAnswer;

  if(props.state) {
    classAnswer = `answers-item answers-item--${props.state}`;
  } else {
    classAnswer = `answers-item`;
  }

  console.log(classAnswer);

  return (
    <li className={classAnswer} onClick={() => props.onAnswerClick(props.answer.id)}>
      {props.answer.text}
    </li>
  )
};

export default AnswersItem;
