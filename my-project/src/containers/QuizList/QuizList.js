import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './QuizList.css';
import Loader from '../../components/UI/Loader/Loader';
/*import axios from '../../axios/axios-quiz';*/
import {connect} from 'react-redux';
import {fetchQuizes} from '../../store/actions/quiz';

class QuizList extends Component {
/*
  state = {
    quizes: [],
    loading: true
  }
*/
  renderQuizes = () => {
    return this.props.quizes.map((quiz) => {
      return (
        <li key={quiz.id}>
          <NavLink to={"/quiz/" + quiz.id}>
            {quiz.name}
          </NavLink>
        </li>
      )
    });
  }

  componentDidMount = () => {
    this.props.fetchQuizes();
  /*  try {
      const response = await axios.get("/quizes.json");
      const quizes = [];
      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Тест №${index + 1}`
        })
      });

      this.setState({
        quizes,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }*/
  }

  render() {
    return (
      <div className="quiz-list">
        <div>
          <h1>Quiz List</h1>

          {this.props.loading && this.props.quizes !== 0
            ? <Loader /> :
            <ul>
              { this.renderQuizes() }
          </ul>}

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    quizes: state.quiz.quizes,
    loading: state.quiz.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizes: () => dispatch(fetchQuizes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
