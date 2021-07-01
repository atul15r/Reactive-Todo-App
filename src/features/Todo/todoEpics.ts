import { of, concat, from } from 'rxjs';
import { filter, mergeMap, catchError, withLatestFrom, switchMap } from 'rxjs/operators';
import { appActions, todosActions } from 'app/rootActions';
import { colors } from 'utils';
import { Epic } from 'redux-observable';
import { RootState, AppActions } from 'app/rootReducer';
import { todosService } from 'services/api/Todos';

const postTodoEpic: Epic<AppActions, AppActions, RootState> = action$ =>
	action$.pipe(
		filter(todosActions.addItem.match),
		mergeMap(({ payload }) =>
			from(todosService.postTodo(payload)).pipe(
				mergeMap(({ data }: any) => [
					todosActions.addItemSuccess(data),
					appActions.setToastMessage({
						msg: 'todo added successfully',
						status: 'success',
						bg: colors.white
					})
				]),
				catchError(message => concat(of(todosActions.addItemFailure()), of(appActions.setAsyncError(message))))
			)
		)
	);

const postTodoFailureEpic: Epic<AppActions, AppActions, RootState> = (action$, state$) =>
	action$.pipe(
		filter(todosActions.addItemFailure.match),
		withLatestFrom(state$),
		mergeMap(([, state]) => [
			appActions.setToastMessage({
				msg: state?.app?.error,
				status: 'error',
				bg: colors.white
			}),
			appActions.resetAsyncError()
		])
	);

const deleteTodoEpic: Epic<AppActions, AppActions, RootState> = action$ =>
	action$.pipe(
		filter(todosActions.deleteItem.match),
		switchMap(({ payload }) =>
			from(todosService.deleteTodo(payload)).pipe(
				mergeMap(({ data }: any) => [todosActions.deleteItemSuccess(data)]),
				catchError(message =>
					concat(of(todosActions.deleteItemFailure()), of(appActions.setAsyncError(message)))
				)
			)
		)
	);

const deleteTodoFailureEpic: Epic<AppActions, AppActions, RootState> = (action$, state$) =>
	action$.pipe(
		filter(todosActions.deleteItemFailure.match),
		withLatestFrom(state$),
		mergeMap(([, state]) => [
			appActions.setToastMessage({
				msg: state?.app?.error,
				status: state?.app?.error.includes('Invalid') ? 'warning' : 'error',
				bg: colors.white
			}),
			appActions.resetAsyncError()
		])
	);

export const updateTodoEpic: Epic<AppActions, AppActions, RootState> = action$ =>
	action$.pipe(
		filter(todosActions.updateItem.match),
		switchMap(({ payload }) =>
			from(todosService.updateTodo(payload)).pipe(
				mergeMap(({ data }: any) => [todosActions.updateItemSuccess(data)]),
				catchError(message =>
					concat(of(todosActions.updateItemFailure()), of(appActions.setAsyncError(message)))
				)
			)
		)
	);

const updateTodoFailureEpic: Epic<AppActions, AppActions, RootState> = (action$, state$) =>
	action$.pipe(
		filter(todosActions.updateItemFailure.match),
		withLatestFrom(state$),
		mergeMap(([, state]) => [
			appActions.setToastMessage({
				msg: state?.app?.error,
				status: state?.app?.error.includes('Invalid') ? 'warning' : 'error',
				bg: colors.white
			}),
			appActions.resetAsyncError()
		])
	);

const fetchTodosEpic: Epic<AppActions, AppActions, RootState> = action$ =>
	action$.pipe(
		filter(todosActions.fetchItem.match),
		switchMap(() =>
			from(todosService.fetchTodos()).pipe(
				mergeMap(({ data }: any) => [todosActions.fetchItemSuccess(data)]),
				catchError(message =>
					concat(of(todosActions.fetchItemFailure()), of(appActions.setAsyncError(message)))
				)
			)
		)
	);

const fetchTodosFailureEpic: Epic<AppActions, AppActions, RootState> = (action$, state$) =>
	action$.pipe(
		filter(todosActions.fetchItemFailure.match),
		withLatestFrom(state$),
		mergeMap(([, state]) => [
			appActions.setToastMessage({
				msg: state?.app?.error,
				status: state?.app?.error.includes('Invalid') ? 'warning' : 'error',
				bg: colors.white
			}),
			appActions.resetAsyncError()
		])
	);

export const todosEpics = [
	postTodoEpic,
	postTodoFailureEpic,
	deleteTodoEpic,
	deleteTodoFailureEpic,
	updateTodoEpic,
	updateTodoFailureEpic,
	fetchTodosEpic,
	fetchTodosFailureEpic
];
