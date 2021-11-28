import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import UseAuth from '../Hooks/UseAuth';
const AdminRoute = ({ children, ...rest }) => {
	const { user, loading, admin } = UseAuth();
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
		<Route
			{...rest}
			render={({ location }) =>
				user.email && admin ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/dashboard',
							state: { from: location },
						}}></Redirect>
				)
			}></Route>
	);
};

export default AdminRoute;
