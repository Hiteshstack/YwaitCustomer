import React from 'react';
import iconfirst from '../../Assets/netIcon.png';
import iconsecond from '../../Assets/wifiIcon.png';
import iconthird from '../../Assets/betteryIcon.png';
import './style.css';

export default class AppBar extends React.Component {
	
	render(){ 
	
		return(
			<div className="container">
				<div className="row ">
					<div className="col-md-6">
					<p className="paragraphs">9:41</p>
					</div>
					<div className="col-md-6 text-right">
					<img src={iconfirst} className="img-fluid"/>
					<img src={iconsecond} className="img-fluid"/>
					<img src={iconthird} className="img-fluid"/>
					</div>
				</div>
			</div>
			);
		}
	}