import React from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
	const clockIcon = <FontAwesomeIcon icon={faClock} />;
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<div>
			<div className="row container">
				<div className="col-lg-6 col-md-6 col-12 border-end border-info border-5 mb-5">
					<h4>Get In Touch</h4>
					<p>
						Tourism is the activities of people traveling to and staying in
						places outside their usual environment for leisure, business or
						other purposes for not more than one consecutive year. Tourism is a
						dynamic and competitive industry that requires the ability to adapt
						constantly to customers’ changing needs and desires, as the
						customer’s satisfaction, safety and enjoyment are particularly the
						focus of tourism businesses.
					</p>
					<div className="d-flex">
						<h1 className="text-danger">{clockIcon}</h1>
						<div className="ms-4">
							<h4 className="text-warning fw-bold">Open Hour</h4>
							<span>Sat-Thu At</span>
							<br />
							<span>10.00Am to 10.00Am</span>
						</div>
					</div>
					<div className="d-flex mt-3">
						<h1 className="text-danger">{clockIcon}</h1>
						<div className="ms-4">
							<h4 className="text-warning fw-bold">Close Hour</h4>
							<span>Friday Office Close</span>
						</div>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-12 border-start border-warning border-5 mb-5">
					<h4>Send Query</h4>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							placeholder="Full Name"
							className="form-control mb-3"
							{...register('Full Name', { required: true, maxLength: 20 })}
						/>
						<input
							placeholder="Subject"
							className="form-control mb-3"
							{...register('Subject')}
						/>
						<textarea
							placeholder="Message"
							className="form-control mb-3"
							{...register('Subject')}
						/>
						<input
							placeholder="Email"
							className="form-control mb-3"
							type="email"
							{...register('Email')}
						/>
						<input
							placeholder="Number"
							className="form-control mb-3"
							type="tel"
							{...register('age', { min: 18, max: 99 })}
						/>
						<input
							className="form-control mb-3 btn btn-warning"
							type="submit"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
