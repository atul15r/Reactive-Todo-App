import { createAction } from '@reduxjs/toolkit';

export const setToastMessage = createAction<{
	msg: string;
	status: string;
	bg: string;
}>('setToastMessage');
export const setModalMessage = createAction<{
	msg: string;
	status: string;
	bg: string;
}>('setModalMessage');
export const setAsyncError = createAction<string>('setAsyncError');
export const resetAsyncError = createAction('resetAsyncError');
export const resetModal = createAction('resetModal');
