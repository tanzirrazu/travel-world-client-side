import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useHistory, useLocation } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Login = () => {
	const { googleSignIn, signinWithEmail } = UseAuth();
	let history = useHistory();
	let location = useLocation();
	const rediret_url = location.state?.from || '/home';
	const [loginData, setLoginData] = useState({});

	const handleOnChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);
	};

	const handelEmailLogin = (e) => {
		e.preventDefault();
		signinWithEmail(loginData.email, loginData.password, location, history);
	};
	const handelRdirectUrl = () => {
		googleSignIn().then((result) => {
			history.push(rediret_url);
		});
	};

	const googleIcon = <FontAwesomeIcon icon={faGoogle} />;
	return (
		<div className='row container-fluid'>
			<div className='col-md-6 col-lg-6 col-xs-12 border border-secondary  mx-auto my-5  shadow '>
				<div>
					<div className='py-5 text-decoration-underline '>
						<h2 className='fw-bold text-center'>Login With</h2>
					</div>
					<div style={{ width: '500px' }} className='mx-auto'>
						<form onSubmit={handelEmailLogin}>
							<input
								className='form-control mb-3'
								type='email'
								name='email'
								onChange={handleOnChange}
								placeholder='email'
							/>
							<input
								className='form-control mb-3'
								type='password'
								name='password'
								onChange={handleOnChange}
								placeholder='password'
							/>
							<input type='submit' className='btn btn-success' />
						</form>
					</div>
				</div>
				<h2 className='fw-bold text-center text-decoration-underline'>
					Log In With
				</h2>
				<div className='d-flex justify-content-center'>
					<button
						className='d-flex btn rounded-pill border border-secondary align-items-center justify-content-between btn-light btn shadow px-5 my-5'
						onClick={handelRdirectUrl}>
						{' '}
						<h2 className='text-primary me-3'>{googleIcon}</h2>Continue With Google
					</button>
				</div>
				<p className='text-center'>
					Already Have a account? <Link to='/register'>click here</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
