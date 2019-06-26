import React from 'react';
import Img from '../../Assets/ywaitLogo.png';
import './style.css';

export default class LogoSec extends React.Component {
	
	render(){ 
	
		return(
			<div className="pt-2 pb-2">
			<img src={ Img } className="img-fluid"/>
			</div>
			);
		}
	}