import React from 'react';
import icon1 from '../../../img/experience.png';
import icon2 from '../../../img/tour-guide.png';
import icon3 from '../../../img/traveller.png';
import icon4 from '../../../img/trust.png';

const WhyUs = () => {
	return (
		<div className="text-center my-5">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12">
						<div className="mt-5">
							<h2>
								Why <span className="text-warning fw-bold">World</span> Travel?
							</h2>
							<h3>
								Why you are travel with{' '}
								<span className="text-warning fw-bold">World</span> Travel?
							</h3>
						</div>
					</div>
				</div>
				<div className="row mt-5">
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="mb-3">
							<img src={icon2} className="img-fluid" alt="icon2" />
						</div>
						<h5>2000+ Our worldwide guide</h5>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 ">
						<div className="mb-3">
							<img src={icon4} className="img-fluid" alt="icon4" />
						</div>
						<h5>100% trusted travel agency</h5>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 ">
						<div className="mb-3">
							<img src={icon1} className="img-fluid" alt="icon1" />
						</div>
						<h5>10+ year of travel experience</h5>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="mb-3">
							<img src={icon3} className="img-fluid" alt="icon3" />
						</div>
						<h5 className="mb-5">90% of our traveller happy</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyUs;
