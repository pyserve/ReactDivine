import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { loginUser } from '../../store/actions';

export default function Login(props){
	const user = useSelector(s => s.auth)
	const dispatch = useDispatch()
	const [query, anyQuery] = useState(false);

	const validationSchema = yup.object().shape({

	})

	const formik = useFormik({
		initialValues: {
			username: '', password: ''
		},
		onSubmit: (values) => {
			const match = localStorage.getItem(values.username)
			if(match) dispatch(loginUser())
			else anyQuery(true);
		},
		validationSchema: validationSchema
	})

	return(
		<div className="container my-3">
		{user.is_loggedin ? <Redirect to="/home" /> : null}
			<div className="row justify-content-center">
			<div className="col-md-6">
			<div className="card shadow-lg">
			<div className="card-body">
				<div className="d-flex justify-content-between align-items-center py-4">
					<div className="">
						<div className="h5">Log In Divine</div>
						<div className="small text-success">* means field is mandatory.</div>
					</div>
					<div>
						<Link to='/register'>
							<div className="btn btn-outline-dark btn-sm">Regsiter</div>
						</Link>
					</div>
				</div>
				{query ?<div className="text-danger small">Username or password didnot matched.</div> : null}
				<form action="" onSubmit={formik.handleSubmit}>
					<div className="my-2 input-group">
						<span class="input-group-text" id="basic-addon1">@</span>
						<input type="text" name="username" placeholder="Username or Email address *" 
						className="form-control" value={formik.values.username} onChange={formik.handleChange('username')}/>
					</div>
					<div className="my-2 input-group">
						<span class="input-group-text" id="basic-addon1">
							<span className="fa fa-lock"></span>
						</span>
						<input type="password" placeholder="Password *" className="form-control" name="password"
						value={formik.values.password} onChange={formik.handleChange('password')}/>
					</div>
					<div className="mb-3 mt-4">
						<button className="btn btn-success btn-md">Log In</button>
					</div>
					<div className="my-3">
						<span>Register a new Account.</span>
						<span className="px-2"><Link to='/register'>SignUp</Link></span>
					</div>
				</form>
			</div>
			</div>
			</div>
			</div>
		</div>
	);
}