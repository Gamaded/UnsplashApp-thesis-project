import React from "react";
import styled from "styled-components";

type Props = {
  size?: number;
  color?: string;
}

const Typography: React.FC<Props> = ({ 
  children,
  size=16,
  color
}) => {
  return (
    <Text
      size={size}
      color={color}
    >
      {children}
    </Text>
  )
}

const Text = styled.p`
  font-size: ${(props: Props) => props.size}px;
  color: ${(props: Props) => props.color};
  padding
`;

export default Typography;
