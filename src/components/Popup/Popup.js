import React from 'react';

import './Popup.css';

function Popup(props) {
	let {popup} = props;
	console.log(popup)

	if (popup === true) {
		return(
			<div className="popup">
				Для просмотра полноразмерных фотографий необходимо авторизоваться
			</div>)
	} else {
		return null;
	}
}

export default Popup;