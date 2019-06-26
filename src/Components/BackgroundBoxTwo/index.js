import React from 'react';
import LogoSecTwo from '../LogoSecTwo/index.js'
import IconSecTwo from '../IconSecTwo/index.js'




import './style.css';

export default class BackgroundBoxTwo extends React.Component {
	
	render(){ 
	
		return(
			<div className="container background-img text-center">
			      <LogoSecTwo/>
			      <IconSecTwo/>
			</div>
			);
		}
	}