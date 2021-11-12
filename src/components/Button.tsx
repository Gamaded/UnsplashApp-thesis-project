import React from "react";
import styled from "styled-components";

type Props = {
  onClick?: () => void;
  text: string;
}

const Button: React.FC<Props> = ({
  onClick,
  text
}) => {
  return (
    <StButton
      onClick={onClick}
    >
      {text}
    </StButton>
  )
}

const StButton = styled.button`

`;

export default Button;
