import React from 'react';
import Icons from '../../Assets/1stScreenMockup.png';
import Indicator from '../../Assets/1st indicator.png';
import './style.css';

export default class IconSec extends React.Component {
	
	render(){ 
	
		return(
			<div className="pt-2 pb-2 text-center">
			<img src={ Icons } className="img-fluid"/>
			<h6>Do more for your customers,</h6>
			<h6>effortlessly.</h6>
			<img src={ Indicator } className="img-fluid"/>
			</div>
			);
		}
	}