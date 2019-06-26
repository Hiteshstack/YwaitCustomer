import React from 'react';
import IndicatorTwo from '../../Assets/2nd indicator.png';
import Arrow from '../../Assets/arrow.png';
import Profile from '../../Assets/profileIcon.png';
import './style.css';

export default class IconSecThree extends React.Component {
	
	render(){ 
	
		return(
			<div className="pt-2 pb-2 text-center">

			<h6 className="mt-4 mb-4 bold-text">Let's get started!</h6>
			<div className="display-blocks">
			<input type="text" placeholder="Full name" className="form-control text-center mt-2"/>
			<input type="text" placeholder="Phone #" className="form-control text-center mt-2"/>
			<input type="text" placeholder="Email" className="form-control text-center mt-2"/>
			<input type="text" placeholder="Password" className="form-control text-center mt-2"/>
			<button className="btn btn-primary2 mt-2" href="#"><img src={ Profile } className="img-fluid"/> Profile Picture</button>
			</div>
			<h6 className="small-text mt-2 mb-3">This is for customer to recognize you!</h6>
			<div>
			<button className="btn btn-primary3 mt-3">Continue <img src={Arrow} className="img-fluid"/></button>
			</div>

			<img src={ IndicatorTwo } className="img-fluid mb-2 mt-5"/>
			</div>
			);
		}
	}