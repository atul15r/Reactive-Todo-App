/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { Response, Options } from 'redaxios';
import { HttpMethods, EndPoints } from './HTTP.types';

//base url
axios.defaults.baseURL = 'https://us-central1-knead-579e4.cloudfunctions.net/api';

export function requestHandler<T, D = Record<string, unknown>>({
	method,
	url,
	data,
	options = {}
}: {
	method: HttpMethods;
	url: EndPoints;
	data?: D;
	options?: Options;
}): Promise<Response<T>> {
	const httpMethod = method.toLowerCase();
	const hasData = ['post', 'put', 'patch'].indexOf(httpMethod) >= 0;

	const settings = options;
	console.log(':::::::::::::', settings);
	const request = hasData
		? axios[httpMethod as 'post' | 'patch' | 'put'](url, data ? data : {}, settings)
		: axios[httpMethod as 'get'](url, settings);

	return request;
}
