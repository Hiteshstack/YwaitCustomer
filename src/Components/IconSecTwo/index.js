import React from 'react';
import IndicatorTwo from '../../Assets/2nd indicator.png';
import Arrow from '../../Assets/arrow.png';
import './style.css';

export default class IconSecTwo extends React.Component {
	
	render(){ 
	
		return(
			<div className="pt-2 pb-2 text-center">

			<h6 className="mt-4 mb-4">Let's get started!</h6>
			<h6 className="small-text">we've texteda verification code to</h6>
			<h6 className=" mb-5">(605)444-4444</h6>
			<input type="text" placeholder="Enter verification code" className="form-control text-center"/>
			<div>
			<button className="btn btn-primary"><img src={Arrow} className="img-fluid"/></button>
			</div>
			<h6 className="small-text mt-5">Didn't receive the verification code?</h6>
			<h6 className="bold-text">Resend Code</h6>
			<img src={ IndicatorTwo } className="img-fluid mb-2 mt-5"/>
			</div>
			);
		}
	}