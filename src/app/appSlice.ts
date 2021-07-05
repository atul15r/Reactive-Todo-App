import { createSlice, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { colors } from 'utils/colors';
import { setToastMessage, setModalMessage, resetModal, setAsyncError, resetAsyncError } from './appActions';

type appSliceState = {
	toastData: { msg: string; status: string; bg: string };
	modalData: { msg: string; status: string; bg: string };
	error: string;
};

const appSlice = createSlice({
	name: 'app',
	initialState: {
		toastData: { msg: '', status: '', bg: colors.white },
		modalData: { msg: '', status: '', bg: colors.white },
		error: ''
	},
	reducers: {},
	extraReducers: (builder: ActionReducerMapBuilder<appSliceState>) =>
		builder
			.addCase(setToastMessage, (state, action) => ({
				...state,
				toastData: action.payload
			}))
			.addCase(setModalMessage, (state, action) => ({
				...state,
				modalData: action.payload
			}))
			.addCase(resetModal, state => ({
				...state,
				modalData: { msg: '', status: '', bg: colors.white }
			}))
			.addCase(setAsyncError, (state, action) => ({
				...state,
				error: action.payload
			}))

			.addCase(resetAsyncError, state => ({
				...state,
				error: ''
			}))
			.addDefaultCase(state => state)
});

export const { reducer: appReducer, name: appReducerName } = appSlice;

export type TAppActions =
	| ReturnType<typeof setToastMessage>
	| ReturnType<typeof setModalMessage>
	| ReturnType<typeof resetModal>
	| ReturnType<typeof setAsyncError>
	| ReturnType<typeof resetAsyncError>;

export const appActions = {
	setToastMessage,
	setModalMessage,
	resetModal,
	setAsyncError,
	resetAsyncError
};

export type AppState = ReturnType<typeof appReducer>;
