import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  height: ${props => props.height || "14px"};
  background-color: ${props => props.backgroundColor || null};
  background-size: ${props => props.backgroundColor || "cover"};
  background-image: url("${props => props.backgroundImage || null}");
  width: ${props => props.width || "100%"};
  position: ${props => props.position || null};
  top: ${props => props.top || null};
  right: ${props => props.right || null};
  left: ${props => props.left || null};
  bottom: ${props => props.bottom || null};
`;

const Wrapper = ({
  children,
  backgroundColor,
  width,
  height,
  backgroundImage,
  position,
  top,
  left,
  right,
  bottom
}) => (
  <WrapperStyled
    height={height}
    width={width}
    backgroundColor={backgroundColor}
    backgroundImage={backgroundImage}
    position={position}
    top={top}
    right={right}
    left={left}
    bottom={bottom}
  >
    {children}
  </WrapperStyled>
);

export { Wrapper };
