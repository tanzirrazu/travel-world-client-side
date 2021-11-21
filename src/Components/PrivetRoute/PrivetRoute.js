import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import UseAuth from '../Hooks/UseAuth';
const PrivetRoute = ({ children, ...rest }) => {
	const { user, loading } = UseAuth();
	if (loading) {
		return (
			<div className="position-relative">
				<Spinner
					className="position-absolute top-100 start-50 translate-middle"
					animation="grow"
					variant="danger"
				/>
			</div>
		);
	}
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.email ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}></Redirect>
				)
			}></Route>
	);
};

export default PrivetRoute;
