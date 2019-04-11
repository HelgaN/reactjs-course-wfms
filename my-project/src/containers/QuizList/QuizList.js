import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './QuizList.css';
import axios from 'axios';

export default class QuizList extends Component {

  state = {
    quizes: []
  }

  renderQuizes = () => {
    return this.state.quizes.map((quiz) => {
      return (
        <li key={quiz.id}>
          <NavLink to={"/quiz/" + quiz.id}>
            {quiz.name}
          </NavLink>
        </li>
      )
    });
  }

  async componentDidMount() {
    try {
      const response = await axios.get("https://react-quiz-7d88f.firebaseio.com/quizes.json");
      const quizes = [];
      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Тест №${index + 1}`
        })
      });

      this.setState({
        quizes
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="quiz-list">
        <div>
          <h1>Quiz List</h1>

          <ul>
            { this.renderQuizes() }
          </ul>
        </div>
      </div>
    )
  }
}
