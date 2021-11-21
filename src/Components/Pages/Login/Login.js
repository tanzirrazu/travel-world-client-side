import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useHistory, useLocation } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Login = () => {
	const { googleSignIn } = UseAuth();
	let history = useHistory();
	let location = useLocation();
	const rediret_url = location.state?.from || '/home';

	const handelRdirectUrl = () => {
		googleSignIn().then((result) => {
			history.push(rediret_url);
		});
	};

	const googleIcon = <FontAwesomeIcon icon={faGoogle} />;
	return (
		<div className="row container-fluid">
			<div className="col-4 border border-secondary  mx-auto my-5  shadow py-5">
				<h1 className="fw-bold text-center">Log In With</h1>
				<div className="d-flex justify-content-center">
					<button
						className="d-flex btn rounded-pill border border-secondary align-items-center justify-content-between btn-light btn shadow px-5 my-5"
						onClick={handelRdirectUrl}>
						{' '}
						<h2 className="text-primary me-3">{googleIcon}</h2>Continue With
						Google
					</button>
				</div>
				<p className="text-center">
					Don't have a account? <Link to="/register">click here</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
