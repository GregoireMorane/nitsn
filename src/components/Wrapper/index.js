import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  height: ${props => props.height || null};
  width: ${props => props.width || null};
  padding: ${props => props.padding || "none"};
  margin: ${props => props.margin || "none"};
  background-color: ${props => props.backgroundColor || null};
  background-size: ${props => props.backgroundColor || "cover"};
  background-image: url("${props => props.backgroundImage || null}");
  position: ${props => props.position || null};
  top: ${props => props.top || null};
  bottom: ${props => props.bottom || null};
  left: ${props => props.left || null};
  right: ${props => props.right || null};
`;

const Wrapper = ({ children, backgroundColor, width, height, backgroundImage, padding, margin, position, top, bottom, left, right }) => (
  <WrapperStyled
    height={height}
    width={width}
    backgroundColor={backgroundColor}
    backgroundImage={backgroundImage}
    padding={padding}
    margin={margin}
    position={position}
    right={right}
    left={left}
    bottom={bottom}
    top={top}
  >
    {children}
  </WrapperStyled>
);

export { Wrapper };