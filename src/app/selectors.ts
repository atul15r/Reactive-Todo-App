import { createSelector, OutputParametricSelector } from '@reduxjs/toolkit';
// import {authStatus, Status} from 'services';
import { RootState, StateSlices } from './rootReducer';

// function getSliceRequesting(state: RootState, filter: StateSlices): any {
//   return {
//     isSubmitting: state[filter].isSubmitting,
//     isSubmitted: state[filter]?.isSubmitted,
//   };
// }

// function getSliceError(state: RootState, filter: StateSlices): string {
//   return state[filter].error;
// }

// export const makeSliceRequesting = (): OutputParametricSelector<
//   RootState,
//   StateSlices,
//   Status,
//   (res: Status) => Status
// > => createSelector([getSliceRequesting], isLoading => isLoading);

// export const makeSliceError = (): OutputParametricSelector<
//   RootState,
//   StateSlices,
//   string,
//   (res: string) => string
// > => createSelector([getSliceError], error => error);
