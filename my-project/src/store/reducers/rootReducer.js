import {combineReducers} from 'redux';
import quizReduser from './quiz';
import createReducer from './create';

export default combineReducers({
  quiz: quizReduser,
  create: createReducer
});
