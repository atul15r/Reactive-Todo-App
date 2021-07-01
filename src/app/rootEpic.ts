import { combineEpics } from 'redux-observable';
import { todosEpics } from 'features/Todo/todoEpics';
export default combineEpics(...todosEpics);
