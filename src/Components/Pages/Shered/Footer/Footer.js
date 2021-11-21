import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebook,
	faTwitter,
	faInstagram,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { Link, NavLink } from 'react-router-dom';
const Footer = () => {
	const facebook = <FontAwesomeIcon icon={faFacebook} />;
	const twitter = <FontAwesomeIcon icon={faTwitter} />;
	const instagram = <FontAwesomeIcon icon={faInstagram} />;
	const linkidin = <FontAwesomeIcon icon={faLinkedin} />;
	const home = <FontAwesomeIcon icon={faHome} />;
	const phone = <FontAwesomeIcon icon={faPhone} />;
	const mail = <FontAwesomeIcon icon={faMailBulk} />;
	return (
		<div className="bg-secondary  py-5">
			<div className="container">
				<div className="row mx-auto">
					<div className="col-lg-4 col-md-4 col-12">
						<h2>
							<span className="text-warning fw-bold">World</span> Travel
						</h2>
						<p>
							A travel agency is a private retailer or public service that
							provides travel and tourism-related services to the general public
							on behalf of accommodation or travel suppliers to offer different
							kinds of travelling.
						</p>
					</div>
					<div className="col-lg-4 col-md-4 col-12 mb-3">
						<h2>Contact Us</h2>
						<span>
							<span className="text-warning">{home}</span> Address: Mymensing,
							Nandail, 2290, Bangladesh
						</span>
						<br />
						<span>
							<span className="text-warning">{mail} </span>Email:
							tanzirrazu@gmail.com
						</span>
						<br />
						<span>
							<span className="text-warning">{phone}</span> Phone: 01301527018
						</span>
					</div>
					<div className="col-lg-4 col-md-4 col-12">
						<div className="text-center">
							<h4 className="fw-bold">Follow Us</h4>
							<span>Follow us to know more</span>
							<div className="d-flex justify-content-center gap-3">
								<a
									className="text-warning"
									target="_blank"
									href="https://www.facebook.com">
									<h2>{facebook}</h2>
								</a>
								<a
									className="text-warning"
									target="_blank"
									href="https://www.twitter.com">
									<h2>{twitter}</h2>
								</a>
								<a
									className="text-warning"
									target="_blank"
									href="https://www.instagram.com">
									<h2>{instagram}</h2>
								</a>
								<a
									className="text-warning"
									target="_blank"
									href="https://www.linkedin.com">
									<h2>{linkidin}</h2>
								</a>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<p className="text-center">Copyright &#169; 2021 by Tanzir Razu</p>
			</div>
		</div>
	);
};

export default Footer;
