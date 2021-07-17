import React from "react";

import "./Popup.css";

function Popup (props) {
    const {popup} = props;

    return popup ? <div className="popup"> {"Необходимо авторизоваться"} </div> : null;
}

export default Popup;
