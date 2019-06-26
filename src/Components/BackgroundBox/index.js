import React from 'react';
import LogoSec from '../LogoSec/index.js'
import IconSec from '../IconSec/index.js'
import ButtonSec from '../ButtonSec/index.js';
import NavBars from '../NavBars/index.js';

import './style.css';

export default class BackgroundBox extends React.Component {
	
	render(){ 
	
		return(
			<div className="container background-img text-center">
			      <LogoSec/>
			      <hr className="custom-hr"/>
			      <IconSec/>
			      <hr className="custom-hr"/>
			      <ButtonSec/>
			      <hr className="custom-hr"/>
			      <NavBars/>
			</div>
			);
		}
	}