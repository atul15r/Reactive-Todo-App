import { combineReducers } from '@reduxjs/toolkit';
import { todosReducer, TTodosActions, todosReducerName } from 'features/Todo/todoSlice';

import { appReducer, TAppActions, appReducerName, AppState } from './appSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const todosPersistConfig = {
	key: 'todos',
	storage: storage,
	blacklist: ['status']
};

const appPersistConfig = {
	key: 'app',
	storage: storage,
	blacklist: ['toastData', 'error', 'modalData']
};

const rootReducer = combineReducers({
	app: persistReducer(appPersistConfig, appReducer),
	todos: persistReducer(todosPersistConfig, todosReducer)
});

export type AppActions = TAppActions | TTodosActions;

export type StateSlices = typeof appReducerName | typeof todosReducerName;

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
