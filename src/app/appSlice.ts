import { createSlice, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { colors } from 'utils/colors';
import {
	setToastMessage,
	setModalMessage,
	resetModal,
	setAsyncError,
	setPermissionRequest,
	resetPermissionRequest,
	setContactsPermission,
	setStoragePermission,
	setPhoneStatePermission,
	resetAsyncError
} from './appActions';

type appSliceState = {
	toastData: { msg: string; status: string; bg: string };
	modalData: { msg: string; status: string; bg: string };
	error: string;
	permissionRequest: string;
	isStoragePermitted: boolean;
	isContactsPermitted: boolean;
	isPhoneStatePermitted: boolean;
};

const appSlice = createSlice({
	name: 'app',
	initialState: {
		toastData: { msg: '', status: '', bg: colors.white },
		modalData: { msg: '', status: '', bg: colors.white },
		error: '',
		permissionRequest: '',
		isStoragePermitted: false,
		isContactsPermitted: false,
		isPhoneStatePermitted: false
	},
	reducers: {},
	extraReducers: (builder: ActionReducerMapBuilder<appSliceState>) =>
		builder
			// .addCase(setToastMessage, (state, action) => ({
			//   ...state,
			//   toastData: action.payload,
			// }))
			// .addCase(setModalMessage, (state, action) => ({
			//   ...state,
			//   modalData: action.payload,
			// }))
			// .addCase(resetModal, state => ({
			//   ...state,
			//   modalData: {msg: '', status: '', bg: colors.white},
			// }))
			// .addCase(setAsyncError, (state, action) => ({
			//   ...state,
			//   error: action.payload,
			// }))
			// .addCase(setPermissionRequest, (state, action) => ({
			//   ...state,
			//   permissionRequest: action.payload,
			// }))
			// .addCase(setContactsPermission, (state, action) => ({
			//   ...state,
			//   isContactsPermitted: action.payload,
			// }))
			// .addCase(setStoragePermission, (state, action) => ({
			//   ...state,
			//   isStoragePermitted: action.payload,
			// }))
			// .addCase(setPhoneStatePermission, (state, action) => ({
			//   ...state,
			//   isPhoneStatePermitted: action.payload,
			// }))
			// .addCase(resetPermissionRequest, state => ({
			//   ...state,
			//   permissionRequest: '',
			// }))
			// .addCase(resetAsyncError, state => ({
			//   ...state,
			//   error: '',
			// }))
			.addDefaultCase(state => state)
});

export const { reducer: appReducer, name: appReducerName } = appSlice;

export type TAppActions =
	| ReturnType<typeof setToastMessage>
	| ReturnType<typeof setModalMessage>
	| ReturnType<typeof resetModal>
	| ReturnType<typeof setAsyncError>
	| ReturnType<typeof setPermissionRequest>
	| ReturnType<typeof resetAsyncError>
	| ReturnType<typeof resetPermissionRequest>
	| ReturnType<typeof setContactsPermission>
	| ReturnType<typeof setStoragePermission>
	| ReturnType<typeof setPhoneStatePermission>;

export const appActions = {
	setToastMessage,
	setModalMessage,
	resetModal,
	setAsyncError,
	setPermissionRequest,
	resetPermissionRequest,
	setContactsPermission,
	setStoragePermission,
	setPhoneStatePermission,
	resetAsyncError
};

export type AppState = ReturnType<typeof appReducer>;
