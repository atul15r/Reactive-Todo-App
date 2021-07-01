import {createSelector} from '@reduxjs/toolkit';
import {RootState} from 'app/rootReducer';
import {AppState} from './appSlice';

function getUser(state: RootState): AppState {
  return state.app;
}

export const selectAppState = createSelector(getUser, app => app);
