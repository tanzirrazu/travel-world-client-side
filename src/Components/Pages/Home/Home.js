import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import TourPlaces from '../TourPlaces/TourPlaces';
import Header from '../Shered/Header/Header';
import Footer from '../Shered/Footer/Footer';
import WhyUs from '../WhyUs/WhyUs';
import awesomeBg from '../../../img/awesome_bg.jpg';
import UseAuth from '../../Hooks/UseAuth';
import { Spinner } from 'react-bootstrap';

const Home = () => {
	const { loading } = UseAuth();
	if (loading) {
		return (
			<div className='position-relative'>
				<Spinner
					className='position-absolute top-100 start-50 translate-middle'
					animation='grow'
					variant='danger'
				/>
			</div>
		);
	}
	return (
		<div>
			<Header />
			<Banner />
			<div className='row container-fluid my-5 align-items-center'>
				<div className='col-lg-6 col-md-6 col-12'>
					<img src={awesomeBg} className='img-fluid' alt='' />
				</div>
				<div className='col-lg-6 col-md-6 col-12 text-center'>
					<h1 className='display-3 fw-bold'>
						Go Ahead & Make <br /> Awesome Tour
					</h1>
					<h4 className='mt-3'>
						Discover Hidden Wonders On Trips With World Travel
					</h4>
					<button className='btn btn-outline-warning'>Explore more</button>
				</div>
			</div>
			<TourPlaces />
			<WhyUs />
			<ContactUs />
			<Footer />
		</div>
	);
};

export default Home;
