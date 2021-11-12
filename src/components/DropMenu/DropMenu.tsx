import React, { useState, useEffect, ReactChild } from "react";
import styled from "styled-components";

type Props = {
  content: ReactChild;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  slide?: boolean;
}

const DropMenu: React.FC<Props> = ({
  children,
  content,
  top,
  right,
  bottom,
  left,
  slide
}) => {
  const [isOpened, setIsOpenned] = useState(false);
  return (
    <DropMenuWrapper
      onMouseOver={() => setIsOpenned(true)}
      onMouseLeave={() => setIsOpenned(false)}
    >  
      <ChildrenCont>
        {children}
      </ChildrenCont>
      <ContentContainer top={top} right={right} bottom={bottom} left={left} slide isOpened={isOpened}>
        {content}
      </ContentContainer>
    </DropMenuWrapper>
  )
}

type Position = {
  isOpened: boolean;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  slide?: boolean;
}

const DropMenuWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const ChildrenCont = styled.div`

`;

const ContentContainer = styled.div`
  position: absolute;
  ${({top, right, bottom, left, slide}: Position): string | undefined => {
    return `
      ${top === undefined ? undefined : `top: ${top}px`};
      ${right === undefined ? undefined : `right: ${right}px`};
      ${bottom === undefined ? undefined : `bottom: ${bottom}px`};
      ${left === undefined ? undefined : `left: ${left}px`};
      ${slide === undefined ? undefined : "transition: width 0.5s"};
    `;
  }};
  width: ${(props: Position) => props.isOpened ? "100%" : "0px"} ;
  padding-top: 15px;
  background-color: #424242;
  overflow: hidden;
`;

export default DropMenu;
