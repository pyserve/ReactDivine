export default function Footer(props){
	return(
		<div className="container-fluid mt-5 bg-dark">
		<div className="container py-5">
			<div className="row text-light">
				<div className="col-md-4 mt-3">
					<div className="pb-3">
						<img src={'./logo/favicon.png'} width="75" height="75" alt="." 
							className="rounded-circle border border-2 border-light"/>
					</div>
					<div className="d-flex align-items-center">
						<div className="h5 ps-0">Divine Web Solutions</div>
					</div>
					<div className="small">+977 9845713027, aneildhakal21@gmail.com</div>
					<div className="small">Simara-04, Bara, Nepal</div>
				</div>
				<div className="col-md-4 mt-3">
					<div className="">Shorcut Links</div>
				</div>
				<div className="col-md-4 mt-3">
					<div className="">Get Connected</div>
				</div>
			</div>
			<div className="pt-5 pb-3 text-center text-light">
				<div>&copy;2021, Divine Web Solutions</div>
				<div>All Rights Reserved.</div>
			</div>
		</div>
		</div>
	);
}