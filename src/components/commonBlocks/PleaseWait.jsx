import React from "react";
import styled, {css, keyframes} from "styled-components";

function PleaseWait (props) {
    const {background} = props;
    const theme = {
        "light": {
            "primary": "#424242",
            "secondary": "#000000e0"
        },
        "dark": {
            "primary": "#ffffff",
            "secondary": "#ffffff"
        }
    };

    return (
        <PleaseWaitCont >
            <PleaseWaitText theme={theme[background]} >{"Пожалуйста подождите"}</PleaseWaitText>
            <LoaderRing theme={theme[background]} >
                <div />
                <div />
                <div />
                <div />
            </LoaderRing>
        </PleaseWaitCont>
    );
}

const PleaseWaitCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 30px;
    background-color: transparent;
`;

const PleaseWaitText = styled.div(props => ({
    "color": props.theme.secondary,
    "font-size": "18px"
}));

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
console.log(rotate);

const animation = () => css`${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`;

const LoaderRing = styled.div(props => ({
    "display": "inline-block",
    "position": "relative",
    "width": "80px",
    "height": "80px",
    "padding-top": "20px",
    "div": {
        "box-sizing": "border-box",
        "display": "block",
        "position": "absolute",
        "width": "64px",
        "height": "64px",
        "margin": "8px",
        "border": `8px solid ${props.theme.primary}`,
        "border-radius": "50%",
        animation,
        "border-color": `${props.theme.primary} transparent transparent transparent`
    },
    "& :nth-child(1)": {
        "animation-delay": "-0.45s"
    },
    "& :nth-child(2)": {
        "animation-delay": "-0.3s"
    },
    "& :nth-child(3)": {
        "animation-delay": "-0.15s"
    }
}));

export default PleaseWait;
