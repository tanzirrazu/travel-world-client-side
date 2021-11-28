import React from 'react';
import { useForm } from 'react-hook-form';
const AddServices = () => {
	const { register, reset, handleSubmit } = useForm();

	const onSubmit = (data) => {
		fetch('http://localhost:5000/services', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
		reset();
	};
	return (
		<div>
			<div className='my-5 container mx-auto'>
				<h2>Add Services</h2>
				<form className='shadow p-5' onSubmit={handleSubmit(onSubmit)}>
					<label>Destination</label>
					<input
						className='form-control mb-3   '
						type='text'
						{...register('Destination')}
					/>
					<label>Description</label>
					<textarea
						className='form-control mb-3   '
						type='text'
						{...register('Description')}
					/>
					<label>Venu</label>
					<input
						className='form-control mb-3   '
						type='text'
						{...register('Venu')}
					/>
					<label>Date</label>
					<input
						className='form-control mb-3   '
						type='date'
						{...register('Date')}
					/>
					<label>Price</label>
					<input
						className='form-control mb-3   '
						type='number'
						{...register('Price', {
							required: true,
						})}
					/>
					<label>Membar</label>
					<input
						className='form-control mb-3   '
						type='number'
						{...register('Membar', {
							required: true,
						})}
					/>
					<label>Banner</label>
					<input
						className='form-control mb-3   '
						type='text'
						{...register('Banner', {
							required: true,
						})}
					/>
					<input type='submit' className='btn btn-outline-dark' />
				</form>
			</div>
		</div>
	);
};

export default AddServices;
