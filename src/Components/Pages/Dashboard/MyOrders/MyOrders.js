import React, { useEffect, useState } from 'react';
import UseAuth from '../../../Hooks/UseAuth';

const MyOrders = () => {
	const [myOrders, setMyorders] = useState([]);
	const [control, setControl] = useState(false);
	const { user } = UseAuth();
	useEffect(() => {
		fetch(`http://localhost:5000/myOrders/${user.email}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setMyorders(data);
			});
	}, [control]);
	const handelDelete = (id) => {
		fetch(`http://localhost:5000/deleteOrder/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount) {
					alert('Deleted Succesfully');
					setControl(!control);
				}
			});
	};
	console.log(myOrders);
	return (
		<div
			style={{
				marginTop: '60px',
				marginBottom: '60px',
			}}>
			<div className='row mx-auto row-cols-1 row-cols-sm-2 row-cols-md-3 g-4'>
				{myOrders.map((orders) => (
					<div
						key={orders._id}
						className='col'
						data-aos='fade-left'
						data-aos-duration='2000'>
						<div
							className='d-flex align-items-center justify-content-evenly shadow p-3'
							style={{ height: '220px' }}>
							<img src={orders.Banner} width='150px' height='100px' alt='' />
							<div>
								<h6>{orders.Destination}</h6>

								<span className='text-success'>${orders.Price}</span>
								<br />
								<span className='broder border-success'>{orders.status}</span>
								<br />
								<button
									onClick={() => handelDelete(orders._id)}
									className='btn btn-danger btn-sm mt-1'>
									Cancel
								</button>

								{/* {orders.payment ? (
								<button className='btn btn-secondary btn-sm ms-2 mt-1' disabled>
									Paid
								</button>
							) : (
								<Link to={`/dashboard/payment/${orders._id}`}>
									<button className='btn btn-danger btn-sm ms-1 mt-1'>pay</button>
								</Link>
							)} */}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyOrders;
