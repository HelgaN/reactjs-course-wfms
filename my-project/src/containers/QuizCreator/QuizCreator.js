import React, {Component} from 'react';
import './QuizCreator.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import {createControl} from '../../form/formFramework';

function createOptionContriol(number) {
  return createControl({
    label: `Вариант ${number}`,
    errorMessage: "Значение не может быть пустым",
    id: number
  }, {required: true});
};

function createFormControls() {
  return {
    quiestion: createControl({
      label: "Введите вопрос",
      errorMessage: "Вопрос не может быть пустым"
    }, {required: true}),
    option1: createOptionContriol(1),
    option2: createOptionContriol(2),
    option3: createOptionContriol(3),
    option4: createOptionContriol(4)
  }
}

export default class QuizCreator extends Component {

  state = {
    quiz: [],
    formControls: createFormControls()
  }

  submitHandler = (event) => {
    event.preventDefault();

  }

  addQuestionHandler = () => {

  }

  changeHandler = (value, controlName) => {

  }

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <React.Fragment key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={event => this.changeHandler(event.target.value, controlName)}
          />

          { index === 0 ? <hr /> : null}
        </React.Fragment>
      )
    });
  }

  render() {
    return (
      <div className="quiz-creator">
        <div>
          <h1>Создание теста</h1>

          <form onSubmit={this.submitHandler}>

            { this.renderControls() }

            <select></select>

            <Button
              type="button primary-button"
              onClick={this.addQuestionHandler}
            >
              Добавить вопрос
            </Button>

            <Button
              type="button success-button"
              onClick={this.createQuizHandler}
            >
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    )
  }
}
