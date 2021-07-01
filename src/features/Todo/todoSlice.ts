import { createSlice, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { TodoTypes } from 'interface/todo.types';
import { Status } from 'services';
import {
	addItem,
	addItemFailure,
	addItemSuccess,
	addPendingTodos,
	resetPendingTodos,
	deleteItem,
	deleteItemFailure,
	deleteItemSuccess,
	updateItem,
	updateItemFailure,
	updateItemSuccess,
	fetchItem,
	fetchItemFailure,
	fetchItemSuccess,
	offlineDataUpdate
} from './todoActions';

type todoSliceState = {
	todos: TodoTypes[];
	pendingTodos: TodoTypes[];
	status: string;
	fetching: string;
};

const initialState = {
	todos: [],
	pendingTodos: [],
	status: Status.idle,
	fetching: Status.idle
};

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: { resetHome: state => initialState },
	extraReducers: (builder: ActionReducerMapBuilder<todoSliceState>) =>
		builder
			.addCase(addItem, state => ({
				...state,
				status: Status.pending
			}))
			.addCase(addItemFailure, state => ({
				...state,
				status: Status.rejected
			}))
			.addCase(addItemSuccess, (state, action) => ({
				...state,
				status: Status.resolved,
				todos: [...state.todos, action.payload]
			}))
			.addCase(addPendingTodos, (state, action) => ({
				...state,
				status: Status.resolved,
				todos: [...state.todos, action.payload]
			}))
			.addCase(resetPendingTodos, state => ({
				...state,
				status: Status.resolved,
				todos: initialState.pendingTodos
			}))

			.addCase(deleteItem, state => ({
				...state,
				status: Status.pending
			}))
			.addCase(deleteItemFailure, state => ({
				...state,
				status: Status.rejected
			}))
			.addCase(deleteItemSuccess, (state, action) => ({
				...state,
				status: Status.resolved,
				todos: action.payload
			}))

			.addCase(updateItem, state => ({
				...state,
				status: Status.pending
			}))
			.addCase(updateItemFailure, state => ({
				...state,
				status: Status.rejected
			}))
			.addCase(updateItemSuccess, (state, action) => ({
				...state,
				status: Status.resolved,
				todos: action.payload
			}))

			.addCase(fetchItem, state => ({
				...state,
				fetching: Status.pending
			}))
			.addCase(fetchItemFailure, state => ({
				...state,
				fetching: Status.rejected
			}))
			.addCase(fetchItemSuccess, (state, action) => ({
				...state,
				fetching: Status.resolved,
				todos: action.payload
			}))
			.addCase(offlineDataUpdate, (state, action) => ({
				...state,
				todos: action.payload
			}))
			.addDefaultCase(state => state)
});

export const { reducer: todosReducer, name: todosReducerName } = todosSlice;
export const { resetHome } = todosSlice.actions;

export type TTodosActions =
	| ReturnType<typeof addItem>
	| ReturnType<typeof addItemFailure>
	| ReturnType<typeof addItemSuccess>
	| ReturnType<typeof addPendingTodos>
	| ReturnType<typeof resetPendingTodos>
	| ReturnType<typeof fetchItem>
	| ReturnType<typeof fetchItemFailure>
	| ReturnType<typeof fetchItemSuccess>
	| ReturnType<typeof deleteItem>
	| ReturnType<typeof deleteItemFailure>
	| ReturnType<typeof deleteItemSuccess>
	| ReturnType<typeof updateItem>
	| ReturnType<typeof updateItemFailure>
	| ReturnType<typeof updateItemSuccess>
	| ReturnType<typeof offlineDataUpdate>
	| ReturnType<typeof resetHome>;

export const todosActions = {
	addItem,
	addItemFailure,
	addItemSuccess,
	addPendingTodos,
	resetPendingTodos,
	deleteItem,
	deleteItemFailure,
	deleteItemSuccess,
	updateItem,
	updateItemFailure,
	updateItemSuccess,
	fetchItem,
	fetchItemFailure,
	fetchItemSuccess,
	resetHome,
	offlineDataUpdate
};

export type TodosState = ReturnType<typeof todosReducer>;
