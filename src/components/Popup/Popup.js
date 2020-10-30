import React from 'react';

import './Popup.css';

function Popup(props) {
	let {popup} = props;

	return popup ? 
		<div className="popup">
			Необходимо авторизоваться
		</div> :
		null;
}

export default Popup;