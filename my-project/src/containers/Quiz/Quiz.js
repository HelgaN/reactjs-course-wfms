import React, {Component} from 'react';
import './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
/*import axios from '../../axios/axios-quiz';*/
import Loader from '../../components/UI/Loader/Loader';
import {connect} from 'react-redux';
import {fetchQuizById} from '../../store/actions/quiz';

class Quiz extends Component {
/*  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [],
    loading: true
  }*/

  onAnswerClickHandler = (answerId) => {
    if(this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];

      if(this.state.answerState[key] === "success") {
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if(question.rightAnswerId === answerId) {
      if(!results[question.id]) {
        results[question.id] = "success"
      }

      this.setState({
        answerState: {[answerId]: "success"},
        results
      });

      const timeout = setTimeout(() => {
        if(this.isQuizFinished()) {
          this.setState({
            isFinished: true
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          });
        }
        clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = "error";
      this.setState({
        answerState: {[answerId]: "error"},
        results
      });
    }
  }

  isQuizFinished = () => {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  repeadHandler = () => {
    this.setState({
      results: {},
      isFinished: false,
      activeQuestion: 0,
      answerState: null
    });
  }
/*
  async componentDidMount() {
    try {
      const response = await axios.get(`/quizes/${this.props.match.params.id}.json`);
      const quiz = response.data;

      this.setState({
        quiz,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  }
*/
  componentDidMount() {
    this.props.fetchQuizById(this.props.match.params.id);
  }

  render() {
    return (
      <div className="quiz">
        <div className="quiz-wrapper">
          <h1>Ответьте на все вопросы</h1>

        { this.props.loading || !this.props.quiz
          ? <Loader />
        : this.props.isFinished ?
               <FinishedQuiz
                 results={this.props.results}
                 quiz={this.props.quiz}
                 onRepead={this.repeadHandler}
               /> :
               <ActiveQuiz
                 answers={this.props.quiz[this.props.activeQuestion].answers}
                 question={this.props.quiz[this.props.activeQuestion].question}
                 onAnswerClick={this.onAnswerClickHandler}
                 quizLength={this.props.quiz.length}
                 answerNumber={this.props.activeQuestion + 1}
                 state={this.props.answerState}
               />
         }

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    results: state.quiz.results,
    isFinished: state.quiz.isFinished,
    activeQuestion: state.quiz.activeQuestion,
    answerState: state.quiz.answerState,
    quiz: state.quiz.quiz,
    loading: state.quiz.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizById: (id) => dispatch(fetchQuizById(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
