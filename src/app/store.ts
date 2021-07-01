import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';
import rootReducer, { RootState, AppActions } from './rootReducer';
import rootEpic from './rootEpic';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const rootPersistConfig = {
	key: 'root',
	storage: storage,
	blacklist: ['app', 'todos']
};

const pReducer = persistReducer<RootState>(rootPersistConfig, rootReducer);
const epicMiddleware = createEpicMiddleware<AppActions, AppActions, RootState>();
const middleware = [...getDefaultMiddleware({ serializableCheck: false }), epicMiddleware, logger];

const store = configureStore({
	reducer: pReducer,
	middleware
});

epicMiddleware.run(rootEpic);

const persistor = persistStore(store);
export { persistor, store };

export type AppDispatch = typeof store.dispatch;
export const dispatch: AppDispatch = store.dispatch;

export type AppStore = typeof store;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
