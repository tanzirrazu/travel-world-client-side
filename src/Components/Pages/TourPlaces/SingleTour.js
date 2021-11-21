import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const SingleTour = (props) => {
	const { Banner, Price, Date, Destination, Venu, _id } = props.tour;
	const cartIcon = <FontAwesomeIcon icon={faCartPlus} />;
	return (
		<Card style={{ width: '18rem' }}>
			<img src={Banner} alt="banner-img" className="mt-3" height="260px" />
			<Card.Body>
				<Card.Title>
					<span className="fw-bold">Destination:</span> {Destination}
				</Card.Title>
				<Card.Text>
					<span className="fw-bold">Venu:</span> {Venu}
					<br />
					<span className="fw-bold">Date:</span> {Date}
					<br />
					<span className="fw-bold">Price:</span>{' '}
					<span className="text-danger">${Price}</span>/per person
				</Card.Text>
				<div>
					<Link to={`/tourdetail/${_id}`}>
						<button className="form-control btn btn-outline-danger">
							<span className="me-1"> {cartIcon}</span> Book Now
						</button>
					</Link>
				</div>
			</Card.Body>
		</Card>
	);
};

export default SingleTour;
