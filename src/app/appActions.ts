import {createAction} from '@reduxjs/toolkit';

export const setToastMessage =
  createAction<{
    msg: string;
    status: string;
    bg?: string;
  }>('setToastMessage');
export const setModalMessage =
  createAction<{
    msg: string;
    status: string;
    bg?: string;
  }>('setModalMessage');
export const setAsyncError = createAction<string>('setAsyncError');
export const setPermissionRequest = createAction<string>(
  'setPermissionRequest',
);
export const resetPermissionRequest = createAction<boolean>(
  'resetPermissionRequest',
);
export const setStoragePermission = createAction<boolean>(
  'setStoragePermission',
);
export const setContactsPermission = createAction<boolean>(
  'setContactsPermission',
);
export const setPhoneStatePermission = createAction<boolean>(
  'setPhoneStatePermission',
);
export const resetAsyncError = createAction('resetAsyncError');
export const resetModal = createAction('resetModal');
