import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSignInAlt,
	faSignOutAlt,
	faUserCog,
	faPlus,
} from '@fortawesome/free-solid-svg-icons';
import UseAuth from '../../../Hooks/UseAuth';

const Header = () => {
	const { user, logOut } = UseAuth();
	const signInIcon = <FontAwesomeIcon icon={faSignInAlt} />;
	const signOutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;
	const cartIcon = <FontAwesomeIcon icon={faUserCog} />;
	const plusIcon = <FontAwesomeIcon icon={faPlus} />;
	return (
		<Navbar bg="secondary" sticky="top" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand to="/home" className="me-5">
					<span className="text-warning fw-bold">World</span> Travel
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto ms-3 my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll>
						<NavLink
							className="me-3 text-decoration-none text-white"
							to="/home">
							Home
						</NavLink>
						<NavLink
							className="me-3 text-decoration-none text-white"
							to="/tours">
							Tours
						</NavLink>
					</Nav>
					<div className="d-flex align-items-center">
						<Link to="/manageorder">
							<Button variant="outline-light" className="btn btn-sm me-2">
								<span className="text-warning">{cartIcon}</span>
							</Button>
						</Link>
						{user.email ? (
							<Link to="/addtours">
								<Button variant="outline-light" className="btn btn-sm me-2">
									<span className="text-warning me-2">{plusIcon}</span>Tours
								</Button>
							</Link>
						) : (
							<span></span>
						)}
						{user.email ? (
							<Button
								onClick={logOut}
								variant="outline-light"
								className="btn btn-sm">
								<span className="text-warning">{signOutIcon}</span>
							</Button>
						) : (
							<Link to="/login">
								<Button variant="outline-light" className="btn btn-sm">
									<span className="text-warning">{signInIcon}</span>
								</Button>
							</Link>
						)}

						<div className="d-flex align-items-center ms-3">
							<img
								src={user.photoURL}
								width="50px"
								className="img-fluid rounded-circle"
								alt=""
							/>
							<span className="text-light mx-3">{user.displayName}</span>
						</div>
					</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
