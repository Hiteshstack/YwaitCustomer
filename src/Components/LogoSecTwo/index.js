import React from 'react';
import SmallImg from '../../Assets/ywaitSmallLogo.png';
import ArrowImg from '../../Assets/backArrow.png';
import './style.css';

export default class LogoSecTwo extends React.Component {
	
	render(){ 
	
		return(
			<div className="pt-2 pb-2">
			<div className="p-3">
			<img src={ ArrowImg } className="img-fluid"/>
			<img src={ SmallImg } className="img-fluid"/>
			</div>
			</div>
			);
		}
	}