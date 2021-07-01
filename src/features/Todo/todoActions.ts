import { createAction } from '@reduxjs/toolkit';
import { TodoTypes } from 'interface/todo.types';

export const addItem = createAction<{
	body: string;
}>('addItem');
export const addItemSuccess = createAction<TodoTypes>('addItemSuccess');
export const addItemFailure = createAction('addItemFailure');
export const addPendingTodos = createAction<TodoTypes>('addPendingTodos');
export const resetPendingTodos = createAction('resetPendingTodos');

// delete todo action
export const deleteItem = createAction<{ todoId: string }>('deleteItem');
export const deleteItemSuccess = createAction<TodoTypes[]>('deleteItemSuccess');
export const deleteItemFailure = createAction('deleteItemFailure');

// update item
export const updateItem = createAction<{ body: string; todoId: string }>('updateItem');
export const updateItemSuccess = createAction<TodoTypes[]>('updateItemSuccess');
export const updateItemFailure = createAction('updateItemFailure');

// fetch item
export const fetchItem = createAction('fetchItem');
export const fetchItemSuccess = createAction<TodoTypes[]>('fetchItemSuccess');
export const fetchItemFailure = createAction('fetchItemFailure');

//offline data update
export const offlineDataUpdate = createAction<TodoTypes[]>('offlineDataUpdate');
