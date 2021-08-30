import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function Contact(props){
	const address = [
		{id: 1,title: 'Address', description: ['Province State-03, Bagmati Pradesh','Kathmandu, Nepal'],
			iconClass: 'fa fa-map-marker-alt',iconColor: 'danger'},
		{id: 2, title: 'Phone', description: ['+977 9845713027', '+977 9808777820'],iconClass: 'fa fa-phone',
			iconColor: 'success'},
		{id:3, title: 'Email address', description: ['aneildhakal21@gmail.com', '072bex451@pcampus.edu.np'],
			iconClass: 'fa fa-envelope', iconColor: 'gray'},
	]
	const mapStyles = {
	  width: '100%',
	  height: '300'
	};
	const apiKey = 'AIzaSyDjP1lmJZtABfPb6u14owiJJc8FtG77Muo';
	return(
		<div className="container my-5">
			<div className="row px-2">
			{address.map((addr) => {
				return(
				<div className="col-md-4 text-center my-3 card shadow-lg py-5" key={addr.id}>
					<div className={'h3 text-' + addr.iconColor}>
						<span className={'fa ' + addr.iconClass}></span>
					</div>
					<div className="h5">{addr.title}</div>
					<div className="small">
						{addr.description.map(des => {
							return(
								<div>{des}</div>
							)
						})}
					</div>
				</div>
				)
			})}
			</div>
			<div className="my-4">
				<div className="h5 text-succes py-2">Request A Callback</div>
				<div className="small">
					If you have any queries or suggestions, you may message us through here. 
					We'll respond you as soon as possible.
				</div>
				<div className="row">
					<div className="col-md-8">
					<form action="" className="my-3">
					<div className="row">
						<div className="col-lg-6">
							<div className="flex-fill me-3">
								<input type="text" name="name" placeholder="Full name" 
									className="form-control my-2"/>
								<input type="text" name="number" placeholder="Contact number" 
									className="form-control my-2" />
								<input type="email" name="email" placeholder="Email address" 
									className="form-control my-2" />
							</div>
						</div>
						<div className="col-lg-6">
							<div className="flex-fill me-3">
								<textarea name="message" id="" className="form-control my-2" 
									placeholder="Enter you queries"></textarea>
								
								<div className="d-grid gap-2">
									<button type="submit" className="btn btn-outline-success btn-block my-2">
									Submit
									</button>
								</div>
							</div>
						</div>
					</div>
					</form>
					</div>
				</div>
			</div>
			<div className="my-4">
				{/*<LoadScript googleMapApiKey='AIzaSyDjP1lmJZtABfPb6u14owiJJc8FtG77Muo'>
					<GoogleMap 
					mapContainerStyle={{width: '100%', height: '400px'}}
					zoom={14}
					center= {{lat: 27.8,lng: 89.1}}
					/>
				</LoadScript>*/}
			</div>
		</div>
	);
}