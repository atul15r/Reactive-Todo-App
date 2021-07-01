import React from 'react';
import { todosActions } from 'app/rootActions';
import { TodoTypes } from 'interface/todo.types';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteIcon, EditIcon, FormInput, Button } from 'components';
import { selectTodosState } from './todoSelectors';
import { Status } from 'services';
import Loader from 'react-loader-spinner';
import classNames from 'classnames';
//form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
//@ts-ignore
import { Online } from 'react-detect-offline';
type Props = {
	data: TodoTypes;
	length: number;
	index: number;
};

export const List: FC<Props> = ({ data, length, index }) => {
	const [isOnline, setIsOnline] = useState(true);
	const { todos } = useSelector(selectTodosState);
	const [loading, setLoading] = useState(Status.idle);
	const [updating, setupdating] = useState(Status.idle);

	const [toggle, setToggle] = useState(false);

	const dispatch = useDispatch();

	//validation
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
		defaultValues: { body: data.body }
	});

	const onDelete = (todoId: string) => {
		if (isOnline) {
			setLoading(Status.pending);
			dispatch(todosActions.deleteItem({ todoId }));
		} else {
			const copyTodos: TodoTypes[] = Array.from(todos);
			let index = copyTodos.findIndex((d: TodoTypes) => d.todoId === data.todoId);
			let cloneTodo = Object.assign({}, copyTodos[index]);
			cloneTodo.isDeleted = true;
			copyTodos.splice(index, 1);

			copyTodos.push(cloneTodo);

			dispatch(todosActions.offlineDataUpdate(copyTodos));
		}
	};
	const onEdit = (values: { body: string }) => {
		if (isOnline) {
			setupdating(Status.pending);

			const updateData = {
				body: values.body,
				todoId: data.todoId
			};

			dispatch(todosActions.updateItem(updateData));
		} else {
			const copyTodos: TodoTypes[] = Array.from(todos);
			let index = copyTodos.findIndex((d: TodoTypes) => d.todoId === data.todoId);
			let cloneTodo = Object.assign({}, copyTodos[index]);
			cloneTodo.body = values.body;
			cloneTodo.isUpdated = true;
			copyTodos.splice(index, 1);

			copyTodos.push(cloneTodo);

			dispatch(todosActions.offlineDataUpdate(copyTodos));
		}
		onToggle();
	};

	const onToggle = () => setToggle(!toggle);

	React.useEffect(() => {
		setLoading(Status.resolved);
		setupdating(Status.resolved);
		reset();
	}, [todos]);

	return !data.isDeleted ? (
		<div
			className={classNames('p-4 border-b-2 flex justify-between items-center', {
				'pb-10': length - 1 === index
			})}
		>
			<Online onChange={setIsOnline} />
			{!toggle ? (
				<>
					<p>{data.body}</p>
					<div className="flex justify-around items-center">
						<button onClick={onToggle}>
							<EditIcon />
						</button>

						<button onClick={() => onDelete(data.todoId)} className="ml-5">
							{loading === Status.pending ? (
								<Loader
									type="TailSpin"
									color="#333"
									height={20}
									width={20}
									timeout={30000000} //3 secs
								/>
							) : (
								<DeleteIcon />
							)}
						</button>
					</div>
				</>
			) : (
				<section>
					<form
						id="update-todo"
						className="flex justify-center"
						style={{ width: 350 }}
						onSubmit={handleSubmit(onEdit)}
					>
						<FormInput
							id="body"
							type="text"
							name="body"
							register={register}
							placeholder="write your todo here..."
							className="placeholder-gray-600 rounded-sm pl-3"
							error={errors.body?.message}
						/>
						<Button
							type="submit"
							form="update-todo"
							borderColor="transparent"
							borderRadius="none"
							className="w-1/2 mx-auto p-4 py-2 m-auto flex justify-center items-center hover:bg-blue-700"
						>
							{updating === Status.pending ? (
								<Loader
									type="TailSpin"
									color="#FFF"
									height={20}
									width={20}
									timeout={30000000} //3 secs
								/>
							) : (
								'Update'
							)}
						</Button>
					</form>
				</section>
			)}
		</div>
	) : null;
};
