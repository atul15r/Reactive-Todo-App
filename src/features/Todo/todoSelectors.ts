import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'app/rootReducer';
import { TodosState } from './todoSlice';

function getTodos(state: RootState): TodosState {
	return state.todos;
}

export const selectTodosState = createSelector(getTodos, todos => todos);
