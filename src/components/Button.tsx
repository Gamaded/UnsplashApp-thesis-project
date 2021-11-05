import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
}

const Button: React.FC<Props> = ({
  text
}) => {
  return (
    <StButton>
      {text}
    </StButton>
  )
}

const StButton = styled.button`

`;

export default Button;
