import React from 'react';
import { Carousel } from 'react-bootstrap';
import travel1 from '../../../img/travel-slider-3.jpg';
import travel2 from '../../../img/travel-slider-2.jpg';
import travel3 from '../../../img/travel-slider-1.jpg';
const Banner = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<img className="d-block w-100" src={travel1} alt="First slide" />
				{/* <Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption> */}
			</Carousel.Item>
			<Carousel.Item interval={1000}>
				<img className="d-block w-100" src={travel2} alt="Second slide" />
				{/* <Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption> */}
			</Carousel.Item>
			<Carousel.Item interval={500}>
				<img className="d-block w-100" src={travel3} alt="Third slide" />
				{/* <Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption> */}
			</Carousel.Item>
		</Carousel>
	);
};

export default Banner;
