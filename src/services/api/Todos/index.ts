import { unwrapAPIError } from 'utils/helpers';
import { requestHandler } from '../HTTP';
import { EndPoints, HttpMethods } from '../HTTP/HTTP.types';

const postTodo = async (data: { body: string }) => {
	console.log('post uestion', data);
	try {
		const res = await requestHandler({
			method: HttpMethods.POST,
			url: EndPoints.todo,
			data
		});
		return res;
	} catch (error) {
		const errorValue = unwrapAPIError(error);
		return Promise.reject(errorValue);
	}
};

const fetchTodos = async () => {
	try {
		const res = await requestHandler({
			method: HttpMethods.GET,
			url: EndPoints.todo,
			data: null
		});
		return res;
	} catch (error) {
		const errorValue = unwrapAPIError(error);
		return Promise.reject(errorValue);
	}
};

const updateTodo = async (data: { body: string; todoId: string }) => {
	try {
		const res = await requestHandler({
			method: HttpMethods.PATCH,
			url: `${EndPoints.todo}/${data.todoId}` as EndPoints,
			data: data
		});
		return res;
	} catch (error) {
		const errorValue = unwrapAPIError(error);
		return Promise.reject(errorValue);
	}
};

const deleteTodo = async (data: { todoId: string }) => {
	try {
		const res = await requestHandler({
			method: HttpMethods.DELETE,
			url: `${EndPoints.todo}/${data.todoId}` as EndPoints,
			data: null
		});
		return res;
	} catch (error) {
		const errorValue = unwrapAPIError(error);
		return Promise.reject(errorValue);
	}
};

export const todosService = {
	postTodo,
	fetchTodos,
	updateTodo,
	deleteTodo
};
