import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { appActions } from './rootActions';
import { Todo } from 'features/Todo';
import { selectAppState } from './appSelectors';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { todosActions } from 'features/Todo/todoSlice';

const App = () => {
	const { toastData, permissionRequest, modalData } = useSelector(selectAppState);
	const dispatch = useDispatch();

	const closeModal = () => dispatch(appActions.resetModal());
	useEffect(() => {
		dispatch(todosActions.fetchItem());
	}, []);
	return (
		<div className="w-full h-screen">
			<Todo />
		</div>
	);
};

export default App;
