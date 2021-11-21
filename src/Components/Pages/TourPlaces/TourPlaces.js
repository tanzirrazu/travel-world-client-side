import React, { useEffect, useState } from 'react';
import SingleTour from './SingleTour';

const TourPlaces = () => {
	const [tours, setTours] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/services')
			.then((res) => res.json())
			.then((data) => {
				setTours(data);
			});
	}, []);

	return (
		<div className='my-5'>
			<div className='text-center text-dark fw-bold'>
				<h5 className='text-warning'>Choose Your Package</h5>
				<h2 className='fw-bold'>
					Select Your Best Package <br /> For Your Travel
				</h2>
			</div>
			<div className='row container mt-5 gap-3 mx-auto mb-5 '>
				{tours?.map((tour) => (
					<SingleTour key={tour._id} tour={tour}></SingleTour>
				))}
			</div>
		</div>
	);
};

export default TourPlaces;
