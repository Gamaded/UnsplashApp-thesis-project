import React from 'react';
import {Redirect} from 'react-router-dom';

import './Header.css';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.code = props.code;
		this.unsplash = props.unsplash;
	}

	render() {
		return(
			<header>
				<img className="userAvatar" src=""/>
				<div className="userName">Ruslan</div>
				<button className="auth" onClick={() => {
					if (this.code === undefined) {
						const authenticationUrl = this.unsplash.auth.getAuthenticationUrl([
							"public",
							"write_likes"
						]);

						window.location.assign(authenticationUrl);
					}
				}}>
					{
						this.code === undefined ? 'Auth' : 'Exit'
					}
				</button>
			</header>
		)
	}
}

export default Header;