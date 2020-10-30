import React from 'react';

import './Header.css';

function Header(props) {
	let {isAuth ,unsplash, user} = props;

	function AuthButton() {
		return !isAuth ?
			<button className="auth" onClick={() => {
				const authenticationUrl = unsplash.auth.getAuthenticationUrl([
					"public",
					"write_likes"
				]);

				window.location.assign(authenticationUrl);
			}}>Войти</button> :
			null;
	}

	return(
		<header className="header">
			<img className="userAvatar" alt='your avatar' src={user.profile_image.medium}/>
			<div className="userName">{user.username}</div>
			<AuthButton />
		</header>
	)
}

export default Header;