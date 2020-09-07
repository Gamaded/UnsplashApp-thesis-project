import React from 'react';
import {Redirect} from 'react-router-dom';

import './Header.css';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.code = props.code;
		let {login} = props;
	}

	render() {
		return(
			<header>
				<img className="userAvatar" src=""/>
				<div className="userName">Ruslan</div>
				<button className="auth" onClick={() => {
					if (this.code === '1') {

					}
				}}>Auth</button>
			</header>
		)
	}
}

export default Header;