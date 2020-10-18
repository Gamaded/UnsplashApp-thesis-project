import React from 'react';

import './Header.css';

function Header(props) {
	let {isAuth ,unsplash, user} = props;

	function AuthButton() {
		if (isAuth === false) {
			return(
				<button className="auth" onClick={() => {
					if (isAuth === false) {
						const authenticationUrl = unsplash.auth.getAuthenticationUrl([
							"public",
							"write_likes"
						]);

						window.location.assign(authenticationUrl);
					}
				}}>Войти</button>
			)
		} else {
			return null;
		}
	} 

	return(
		<header>
			<img className="userAvatar" alt='your avatar' src={user.profile_image.medium}/>
			<div className="userName">{user.username}</div>
			<AuthButton />
		</header>
	)
}

export default Header;