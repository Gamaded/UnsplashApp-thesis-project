import React from "react";
import styled from "styled-components";
import "./Popup.css";

function Popup (props) {
    const {popup} = props;

    return popup ? <PopupBlock>{"Необходимо авторизоваться"}</PopupBlock> : null;
}

const PopupBlock = styled.div`
    position: fixed;
    z-index: 3;
    right: 10px;
    bottom: 10px;
    padding: 10px 5px;
    border-radius: 5px;
    background-color: #424242;
    color: #ffffff99;
`;

export default Popup;
