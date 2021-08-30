import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function Navbar(){
	const user = useSelector(s => s.auth)
	return(
		<div className="navbar navbar-expand-md navbar-dark bg-dark shadow-sm py-4 sticky-top">
			<div className="container">
				
				<div className="d-flex align-items-center">
					<Link to='/' className="">
						<img src={'./logo/favicon.png'} 
							className="w-100 rounded-circle border border-2 border-light" alt="."/>
					</Link>
					{user.is_loggedin? null :
					<div className="ps-5 d-flex">
						<Link to='/login' className="">
							<button className="btn btn-success btn-sm mx-2">Login</button>
						</Link>
						<Link to='/register' className="">
							<button className="btn btn-outline-success btn-sm mx-2">Register</button>
						</Link>
					</div>
					}
				</div>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						{user.is_loggedin? 
						<li className="nav-item">
							<Link to="/profile" className="nav-link">
								<span>{user.is_loggedin}</span>
							</Link>
						</li>
						: null}
						<li className="nav-item">
							<Link to="/blog" className="nav-link">
								Blog
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/career" className="nav-link">
								Join Team
							</Link>							
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-link">
								Contact
							</Link>
						</li>
					</ul>
				</div>
				
			</div>
		</div>
	)
}