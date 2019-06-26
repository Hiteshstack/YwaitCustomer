import React from 'react';
import './style.css';

export default class NavBars extends React.Component {
	
	render(){ 
	
		return(
			<div className="">

			      	<div className="inline-block text-center">
			      		<a href="#" className="links">Contact</a>
			      		<a href="#" className="links">.About</a>
			      		<a href="#" className="links">.Terms</a>
			      		<a href="#" className="links">.Privacy</a>
			      	</div>
			</div>
			);
		}
	}