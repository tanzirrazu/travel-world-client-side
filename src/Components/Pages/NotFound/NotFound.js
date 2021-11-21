import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../img/404.png';
const NotFound = () => {
	return (
		<div className="my-5">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="text-center">
							<h2>Ooops!</h2>
						</div>
						<div className="error-img text-center">
							<img src={img} className="img-fluid" alt="logo" />
						</div>
						<div className="error-bot text-center">
							<h5>We Think. You’re Lost</h5>
							<Link to="/home">Go Back to Home</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
