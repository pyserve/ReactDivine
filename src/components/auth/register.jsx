import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { registerUser } from '../../store/actions';

export default function Register(props){
	const user = useSelector(s => s.auth)
	const dispatch = useDispatch()

	const validationSchema = yup.object().shape({
		full_name: yup.string(),
		username: yup.string().required('This is a required field'),
		password: yup.string().required('This is a required field').min(6,'Password length must be 6 or greater'),
		confirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
	})
	const formik = useFormik({
		initialValues: {
			full_name: '', username: '', password: '', confirm: '',
		},
		onSubmit: values => { dispatch(registerUser(values)) },
		validationSchema,
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
						<div className="h5">Register Account</div>
						<div className="small text-success">* means field is mandatory.</div>
					</div>
					<div>
						<Link to='/login'>
							<div className="btn btn-outline-success btn-sm">Log In</div>
						</Link>
					</div>
				</div>
				<form action="" onSubmit={formik.handleSubmit}>
					<div className="my-2">
						<input type="text" name="fname" value={formik.values.full_name} placeholder="Full name" 
						className="form-control" onChange={formik.handleChange('full_name')}/>
						{formik.errors.full_name && formik.touched.full_name 
							? <div className="small text-danger">{formik.errors.full_name}</div> :null}
					</div>
					<div className="my-2">
						<input type="text" name="username" placeholder="Username or Email address *" 
						className="form-control" value={formik.values.username} onChange={formik.handleChange('username')}/>
						{formik.errors.username && formik.touched.username 
							? <div className="small text-danger pb-1">{formik.errors.username}</div> :null}
					</div>
					<div className="my-2">
						<input type="password" name="password" value={formik.values.password} placeholder="New password *" 
						className="form-control" onChange={formik.handleChange('password')}/>
						{formik.errors.password && formik.touched.password 
							? <div className="small text-danger pb-1">{formik.errors.password}</div> :null}
					</div>
					<div className="my-2">
						<input type="password" value={formik.values.confirm} placeholder="Confirm password *" 
						className="form-control" onChange={formik.handleChange('confirm')}/>
						{formik.errors.confirm && formik.touched.confirm 
							? <div className="small text-danger pb-1">{formik.errors.confirm}</div> :null}
					</div>
					<div className="mb-3 mt-4">
						<button type="submit" className="btn btn-dark btn-md">Create Account</button>
					</div>
					<div className="my-3">
						<span>Already registered.</span>
						<span className="px-2"><Link to='/login'>Login</Link></span>
					</div>
				</form>
			</div>
			</div>
			</div>
			</div>
		</div>
	);
}