import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import {
	faShoppingCart,
	faUserEdit,
	faPlus,
	faMoneyBill,
	faUsersCog,
	faStar,
} from '@fortawesome/free-solid-svg-icons';
import AddServices from './AddServices/AddServices';
import MyOrders from './MyOrders/MyOrders';
import ManageOrders from './ManageOrders/ManageOrders';

const Dashboard = () => {
	let { path, url } = useRouteMatch();
	const shoppingBag = <FontAwesomeIcon icon={faShoppingCart} />;
	const userEdit = <FontAwesomeIcon icon={faUserEdit} />;
	const plusIcon = <FontAwesomeIcon icon={faPlus} />;
	const payIcon = <FontAwesomeIcon icon={faMoneyBill} />;
	const userCog = <FontAwesomeIcon icon={faUsersCog} />;
	const starIcon = <FontAwesomeIcon icon={faStar} />;
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
			<div className='row container-fluid'>
				<div
					className='col-12 col-md-2 col-lg-2  bg-secondary vh-100 py-5'
					style={{ width: '220px', marginLeft: '-12px' }}>
					<div>
						<Link to={`${url}`} className='text-decoration-none text-white '>
							<p>{shoppingBag} My Orders</p>
						</Link>
						<Link to={`${url}/pay`} className='text-decoration-none text-white '>
							<p>{payIcon} Pay</p>
						</Link>
					</div>
					<div>
						<Link
							to={`${url}/manageOrders`}
							className='text-decoration-none text-white '>
							<p>{userEdit} ManageOrders</p>
						</Link>
						<Link
							to={`${url}/addServices`}
							className='text-decoration-none text-white'>
							<p>{plusIcon} Add Services</p>
						</Link>
						<Link to={`${url}/makeAdmin`} className='text-decoration-none text-white'>
							<p>{userCog} Make Admin</p>
						</Link>
					</div>
				</div>
				<div className='col-lg-10 col-md-10 col-12'>
					<Switch>
						<Route exact path={path}>
							<MyOrders />
						</Route>
						<Route path={`${path}/addServices`}>
							<AddServices />
						</Route>
						<Route path={`${path}/manageOrders`}>
							<ManageOrders />
						</Route>
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
