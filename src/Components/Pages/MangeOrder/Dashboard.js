import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div>
			<div
				className='bg-secondary  border-bottom border-dark'
				style={{ height: '80px' }}>
				<div>
					<Link to='/home' className='text-decoration-none'>
						<h4 className='pt-4 px-4'>
							<span className='text-warning fw-bold'>World</span> Travel
						</h4>
					</Link>
				</div>
			</div>
			<div className='bg-secondary vh-100 px-4 pt-5' style={{ width: '220px' }}>
				<div>
					<p>My Orders</p>
					<p>Pay</p>
					<p>Review</p>
				</div>
				<div>
					<p>Manage Order</p>
					<p>Add Services</p>
					<p>Make Admin</p>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
