import React from 'react';


export default function AuthLinks(){
	return(
		<div className="navbar navbar-expand navbar-dark bg-dark shadow-sm py-3 border-bottom border-success">
			<div className="container">
				<div className="d-flex justify-content-between">
					<div className="d-flex">
						<button className="btn btn-success btn-sm mx-2">Login</button>
						<button className="btn btn-outline-success btn-sm mx-2">Register</button>
					</div>
				</div>
			</div>
		</div>
	)
}