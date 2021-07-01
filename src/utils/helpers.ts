export const unwrapAPIError = (error: any) => {
	console.log('err', error);
	let errorValue = error?.response?.data?.error;
	return typeof errorValue === 'string' ? errorValue : 'An error occurred.';
};
