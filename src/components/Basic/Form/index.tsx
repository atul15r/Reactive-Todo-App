import React, { FC } from 'react';
import classnames from 'classnames';
import { WarningIcon } from '../SvgIcon';

interface LabelProps {
	htmlFor: string;
	id?: string;
	className?: string;
	children?: React.ReactNode;
	error?: string;
}

interface InputProps {
	className?: string;
	children?: React.ReactNode;
	bgColor?: string;
	type?: 'email' | 'password' | 'text' | 'tel';
	id: string;
	name: string;
	placeholder?: string;
	register?: any;
	error?: string;
	value?: string;
}

export const FormInput: FC<InputProps> = ({
	bgColor = 'gray-100',
	type = 'text',
	name,
	className,
	id,
	register,
	placeholder,
	error
}) => {
	return (
		<input
			{...register(name)}
			placeholder={placeholder}
			id={id}
			name={name}
			type={type}
			className={classnames(
				`${className} appearance-none w-full py-2 pr-3 leading-tight focus:outline-none bg-${bgColor}`,
				{
					'border-red-500': error,
					'text-red-500': error,
					'placeholder-red-500': error,
					'focus:border-red-500': error,
					'focus:shadow-outline-red': error,
					'focus:shadow-outline': !error
				}
			)}
		/>
	);
};

export const FormLabel: FC<LabelProps> = ({ htmlFor, className = 'text-gray-600', children, error, id }) => {
	return (
		<section className="relative">
			<div
				className={classnames('absolute inset-y-0 right-0 flex items-center cursor-pointer', {
					hidden: !error
				})}
			>
				<WarningIcon />
			</div>
			<label
				className={classnames(`${className} block text-left text-lg leading-snug font-normal mb-2`)}
				id={id}
				htmlFor={htmlFor}
			>
				{children}
			</label>
		</section>
	);
};

export const FormError: FC<{ id?: string; error?: string }> = ({ error, id = 'form-error' }) => {
	return (
		<p
			data-cy={id}
			role="alert"
			className={classnames('mt-2 text-sm text-center text-red-500', {
				hidden: !error
			})}
		>
			{error}
		</p>
	);
};
