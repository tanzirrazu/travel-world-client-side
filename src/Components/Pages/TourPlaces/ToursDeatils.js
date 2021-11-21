import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { useForm } from 'react-hook-form';

const ToursDeatils = () => {
	const { id } = useParams();
	const [toursDetail, setToursDetail] = useState([]);
	const { user } = UseAuth();
	useEffect(() => {
		fetch(`http://localhost:5000/services/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setToursDetail(data);
			});
	}, []);
	const { register, reset, handleSubmit } = useForm();

	const onSubmit = (data) => {
		fetch('http://localhost:5000/orders', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					alert('You Order Place Successfully');
				}
			});

		reset();
	};
	return (
		<div className='my-5 row container-fluid g-5'>
			<form onSubmit={handleSubmit(onSubmit)} className='col-md-6 col-lg-6 col-12'>
				<div className='row'>
					<div className='col-md-6 col-lg-6 col-12'>
						<label> Name</label>
						<input
							className='form-control mb-3   '
							type='text'
							value={user.displayName}
							{...register('Name')}
						/>
						<label>Email</label>
						<input
							value={user.email}
							className='form-control mb-3   '
							type='email'
							{...register('Email')}
						/>
						<label>Street address</label>
						<input
							className='form-control mb-3   '
							type='text'
							{...register('address', { required: true })}
						/>
						<label className='me-3 my-2'>Country / Region</label>
						<select {...register('country')} type='text'>
							<option value='Bangladesh'>Bangladesh</option>
							<option value='USA'>USA</option>
							<option value='UAE'>UAE</option>
						</select>
						<br />
						<label>Phone Number</label>
						<input
							className='form-control mb-3   '
							type='number'
							{...register('Phone', { required: true })}
						/>
						<label>Town / City</label>
						<input
							className='form-control mb-3   '
							type='text'
							{...register('City', { required: true })}
						/>
						<label>Zip Code</label>
						<input
							className='form-control mb-3   '
							type='number'
							{...register('Zip code')}
						/>
					</div>
					<div className='col-md-6 col-lg-6 col-12'>
						<input
							className='form-control mb-3   '
							type='text'
							value={toursDetail.Destination}
							{...register('Destination')}
							readOnly
						/>

						<input
							className='form-control mb-3   '
							type='text'
							value={toursDetail.Venu}
							{...register('Venu')}
							readOnly
						/>

						<input
							className='form-control mb-3   '
							type='text'
							value={toursDetail.Banner}
							{...register('Banner', { required: true })}
							readOnly
						/>

						<input
							className='form-control mb-3   '
							type='number'
							value={toursDetail.Price}
							{...register('Price', { required: true })}
							readOnly
						/>

						<input
							className='form-control mb-3   '
							type='text'
							value={toursDetail.Date}
							{...register('Date')}
							readOnly
						/>
					</div>
				</div>
				<input
					type='submit'
					value='PlaceOrder'
					className='btn btn-outline-success form-control'
				/>
			</form>
			<div className='col-md-6 col-lg-6 col-12'>
				<div className='d-flex justify-content-center'>
					<img src={toursDetail.Banner} width='600px' height='300px' alt='' />
				</div>
				<div className='my-3'>
					<h4>{toursDetail.Description}</h4>
					<span className='fw-bold'>Destination:</span> {toursDetail.Destination}
					<br />
					<span className='fw-bold'>Venu:</span> {toursDetail.Venu}
					<br />
					<span className='fw-bold'>Date:</span> {toursDetail.Date}
					<br />
					<span className='fw-bold'>Price:</span>{' '}
					<span className='text-danger'>${toursDetail.Price}</span>/per person
				</div>
			</div>
		</div>
	);
};

export default ToursDeatils;
