import firebase from '../firebaseConfig';
import { useState, useEffect } from 'react';

export default function Services(){
	const [services, setServices] = useState([]);
	useEffect(() => {
		console.log('component did mounted');
	},[])

	const getServices = () => {
		const servicesRef =  firebase.firestore().collection('services');

		 servicesRef.get().then(snapshot => {
			const list = snapshot.docs.map(doc => {
				return doc.data()
			});
			setServices(list);
		})
	}
	getServices();

	return(
		<div className="container my-5">
			{/*<div className="row">
				<div className="h3 bg-dark text-center text-light text-uppercase py-3 card shadow-lg">What We Do</div>
				{services.length === 0 ? <div className="text-center">Loading...</div> : null}
				{services.map(service => {
					return(
					<div className="col-md-6 my-4">
						<div className="card p-5 bg-dark border border-info shadow-md serviceitem">
							<div className="h6 bg-white text-success text-center py-4 rounded-circle">
								{service.name}
							</div>
							<div className="small text-white py-2">{service.description}</div>
						</div>
					</div>
					);
				})}
			</div>*/}
			<div class="head">
		        <div class="my-5">
		            <ul class="background ">
		                <li></li> <li></li> <li></li> <li></li> <li></li>
		                <li></li> <li></li> <li></li> <li></li> <li></li>
		             </ul>
		            <div class="row">
		                <div class="col-md-6 m-auto p-3 text-center ">
		                    <div class="cards">
			                    <div class="card shadow-lg p-5 " id="cards">
			                        <h1> 
			                        	<span class="text-warning fw-bold">M</span>ake 
			                        	<span class="text-success fw-bold"> C</span>reative
			                        </h1>
			                        <p class="h6 py-2">
			                           Success is not final; failure is not fatal: 
			                           it is the courage to continue that counts
			                        </p>
			                        <a href='#about'>
			                        	<button class="btn btn-outline-light btn-lg  mx-auto">
			                        		About Us
			                        	</button>
			                        </a>
			                    </div>
		                    </div>
		                </div>
		            </div>
		        </div>
                <div id="about"></div>
		    </div>

	<div class="p-3 my-5" id="">
        <div class="aboutus">
            <div class="row">
                <div class="col-md-6">
                    <img src={"vector.png"} alt="" width="100%" height="auto" />
                    
                </div>
                <div class="col-md-6 p-4 my-5">
                    <h3><span>A</span>bout Us</h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat impedit rem unde? Doloribus itaque soluta totam, a labore modi natus porro repellat cum! Tempora repellendus incidunt a fuga velit similique!
                    <br /> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi est itaque quia aperiam enim quam mollitia temporibus? Dolorum cumque modi nostrum fugit atque. Qui odit rem, aut aperiam modi ipsa?
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 p-4 my-5">
                    <h3><span>C</span>ompany</h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat impedit rem unde? Doloribus itaque soluta totam, a labore modi natus porro repellat cum! Tempora repellendus incidunt a fuga velit similique!
                    <br /> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi est itaque quia aperiam enim quam mollitia temporibus? Dolorum cumque modi nostrum fugit atque. Qui odit rem, aut aperiam modi ipsa?
                    
                </div>
                <div class="col-md-6 ">
                    <img src={"svg.png"} alt="" width="100%" height="auto" />
                   
                </div>
            </div>
        </div>
    </div>

    <div class="my-5">
        <div class="heading">
            <h2 class="text-center p-5 my-3 ">OUR <span class="hedline">SERVICES</span></h2>
        </div>
        
        <div class="services">
            <div class="row">
                <div class="col-md-6">
                    <div class="card shadow-lg p-4 my-2 text-center">
                        <div class="icon text-center">
                            <i class="fa fa-code" aria-hidden="true"></i>
                        </div>
                        <h3>Web Design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti rem vero
                            nesciunt qui aspernatur et molestias .</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow-lg p-4 my-2 text-center">
                        <div class="icon text-center">
                        <i class="fa fa-mobile" aria-hidden="true"></i></div>
                        <h3>Responsive</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti rem vero
                            nesciunt qui aspernatur et molestias .</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow-lg p-4 my-2 text-center">
                        <div class="icon text-center">
                            <i class="fa fa-palette" aria-hidden="true"></i>
                        </div>
                        <h3>Custom design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti rem vero
                            nesciunt qui aspernatur et molestias .</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow-lg p-4 my-2 text-center">
                        <div class="icon text-center">
                            <i class="fa fa-headset" aria-hidden="true"></i>
                        </div>
                        <h3>24/7 Services</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti rem vero
                            nesciunt qui aspernatur et molestias .</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow-lg p-4 my-2 text-center">
                        <div class="icon text-center">
                        <i class="fa fa-bullhorn" aria-hidden="true"></i></div>
                        <h3>Seo marekting</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti rem vero
                            nesciunt qui aspernatur et molestias .</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow-lg p-4 my-2 text-center">
                        <div class="icon text-center">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                        <h3>Email marketing</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti rem vero
                            nesciunt qui aspernatur et molestias .</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
	<section id="one">
        <div class="">
            <div class="experts">
                <div class="heading text-center">
                    <h1>Our <span class="hedline">Teams</span> </h1>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card my-5 " id="ca">
                                <div class="img1"><img
                                        src="https://electrek.co/wp-content/uploads/sites/3/2019/07/elon-musk-tesla-cars.jpg?quality=82&strip=all"
                                        alt="" />
                                    <div class="img2"><img
                                            src="https://media.gq.com/photos/566ac3fec0f741b430e641e7/master/pass/elon-musk-gq-1215-01-sq.jpg"
                                            alt="" /></div>
                                </div>
                                <div class="main-text m-5">
                                    <h2 class="p-3">Elon Musk</h2>
                                    <p class="p-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, a
                                        perspiciatis est assumenda facilis
                                        quas vitae amet, nesciunt consectetur, ap!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card my-5" id="ca">
                                <div class="img1"><img
                                        src="https://images.indianexpress.com/2021/05/bill-melinda-gates-divorce-nyt-1200.jpg"
                                        alt="" />
                                    <div class="img2"><img
                                            src="https://storage.googleapis.com/cgiarorg/2021/02/c343f97f-1200x-1-b.jpg"
                                            class="" alt="" /></div>
                                </div>
                                <div class="main-text  m-5">
                                    <h2 class="p-3">Bill Gates</h2>
                                    <p class="p-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, a
                                        perspiciatis est assumenda facilis
                                        quas vitae amet, nesciunt consectetur, aper
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card my-5" id="ca">
                                <div class="img1"><img
                                        src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_115285736_970686970450017_53059.jpg"
                                        alt="" />
                                    <div class="img2"><img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtEuM6YCyiAEfjMvwltOtbnctN4QZ9LcpbQQiab8-FMyXVS20NTz9hEmHoOGAPbHsj_yA&usqp=CAU"
                                            alt="" /></div>
                                </div>
                                <div class="main-text m-5">
                                    <h2 class="p-3">Steve Jobs</h2>
                                    <p class="p-3 ">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, a
                                        perspiciatis est assumenda facilis
                                        quas vitae amet, nesciunt consectetur,
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>    
    
		</div>
	);
}