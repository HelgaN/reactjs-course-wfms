import React from 'react';
import './AnswersItem.css';

const AnswersItem = (props) => {
  return (
    <li className="answers-item">
      {props.answer.text}
    </li>
  )
};

export default AnswersItem;
