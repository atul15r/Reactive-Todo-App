import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormInput, FormError, FormLabel, Button } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodosState } from './todoSelectors';
import { todosActions } from 'app/rootActions';
import { Status } from 'services';
import { TodoTypes } from 'interface/todo.types';
//@ts-ignore
import { Offline, Online } from 'react-detect-offline';
import Loader from 'react-loader-spinner';
import { List } from './List';
import { uuid, isUuid } from 'uuidv4';
import { batch } from 'react-redux';

export function Todo() {
	const [isOnline, setIsOnline] = React.useState(true);
	const [submitting, setSubmitting] = React.useState(Status.idle);
	const [height, setHeight] = React.useState(0);
	const { todos, fetching } = useSelector(selectTodosState);
	const dispatch = useDispatch();

	// measure element height
	let secRef = useRef<any>();

	const {
		handleSubmit,
		formState: { errors },
		register,
		reset
	} = useForm({
		mode: 'all',
		resolver: yupResolver(
			Yup.object().shape({
				body: Yup.string().required('You Must Provide A value')
			})
		),
		defaultValues: { body: '' }
	});

	const onSubmit = (values: { body: string }) => {
		setSubmitting(Status.pending);
		if (isOnline) dispatch(todosActions.addItem(values));
		else dispatch(todosActions.addPendingTodos({ ...values, todoId: uuid(), syncRequired: true }));
		reset();
	};

	React.useEffect(() => {
		setSubmitting(Status.resolved);

		reset();
	}, [todos]);

	React.useEffect(() => {
		if (isOnline) {
			let needsToDelete = todos.filter((d: TodoTypes) => d.isDeleted === true);
			let newData = todos.filter(
				(d: TodoTypes) =>
					d.syncRequired === true &&
					d.isUpdated === true &&
					(d.isDeleted === false || d.isDeleted === undefined)
			);
			let newData_two = todos.filter(
				(d: TodoTypes) =>
					d.syncRequired === true &&
					(d.isUpdated === false || d.isUpdated === undefined) &&
					(d.isDeleted === false || d.isDeleted === undefined)
			);
			let needsToUpdate = todos.filter(
				(d: TodoTypes) =>
					d.isUpdated === true &&
					(d.isDeleted === false || d.isDeleted === undefined) &&
					d.syncRequired === undefined
			);

			//sync deletion
			if (needsToDelete.length) {
				batch(() => {
					needsToDelete.forEach((d: TodoTypes) => {
						if (!isUuid(d.todoId)) {
							dispatch(todosActions.deleteItem({ todoId: d.todoId }));
						}
					});
				});
			}

			//sync addition
			if (newData.length) {
				batch(() => {
					newData.forEach((d: TodoTypes) => {
						dispatch(todosActions.addItem({ body: d.body }));
					});
				});
			}

			//sync addition
			if (newData_two.length) {
				batch(() => {
					newData_two.forEach((d: TodoTypes) => {
						dispatch(todosActions.addItem({ body: d.body }));
					});
				});
			}

			//sync updation
			if (needsToUpdate.length) {
				batch(() => {
					needsToUpdate.forEach((d: TodoTypes) => {
						dispatch(todosActions.updateItem({ todoId: d.todoId, body: d.body }));
					});
				});
			}
		}
	}, [isOnline]);

	React.useEffect(() => {
		console.log('height', secRef.current.clientHeight);
		setHeight(window.screen.height - secRef.current.clientHeight);
	}, []);

	return (
		<section className="max-w-sm m-auto block">
			<section ref={secRef}>
				<Online onChange={setIsOnline} />
				<Offline>You're offline right now. Check your connection.</Offline>
				<form id="todo-form" className="pt-6" onSubmit={handleSubmit(onSubmit)}>
					<article className="px-2 mb-5">
						<FormLabel htmlFor="body" error={errors.body?.message}>
							Todo
						</FormLabel>
						<section>
							<FormInput
								id="body"
								type="text"
								name="body"
								register={register}
								placeholder="write your todo here..."
								className="placeholder-gray-600 rounded-sm pl-4 py-3 border"
								error={errors.body?.message}
							/>
						</section>
						<FormError error={errors.body?.message} />
					</article>

					<Button
						type="submit"
						form="todo-form"
						borderColor="transparent"
						borderRadius="full"
						className="w-11/12 md:w-1/2 mx-auto p-4 py-2 m-auto flex justify-center items-center hover:bg-blue-700"
					>
						{submitting === Status.pending ? (
							<Loader
								type="TailSpin"
								color="#FFF"
								height={20}
								width={20}
								timeout={30000000} //3 secs
							/>
						) : (
							'Add Todo'
						)}
					</Button>
				</form>
			</section>
			{todos.length ? (
				<section className="mt-7 overflow-y-auto" style={{ maxHeight: height }}>
					<p className="text-2xl italic ml-4 sm:ml-0">Your Todo's list</p>
					{todos.map((d: TodoTypes, i) => (
						<List key={i} index={i} length={todos.length} data={d} />
					))}
				</section>
			) : fetching === Status.pending ? (
				<section>
					<Loader
						type="TailSpin"
						color="#333"
						height={20}
						width={20}
						timeout={30000000} //3 secs
					/>
					<p>fetching todo's</p>
				</section>
			) : null}
			{!todos.length && fetching === Status.resolved ? <p>no todo's found</p> : null}
		</section>
	);
}
