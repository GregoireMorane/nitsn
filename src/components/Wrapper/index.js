import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  height: ${props => props.height || "14px"};
  width: ${props => props.width || "100%"};
  padding: ${props => props.width || "100%"};
  background-color: ${props => props.backgroundColor || "#fff"};
  background-size: ${props => props.backgroundColor || "cover"};
  background-image: url("${props=> props.backgroundImage || null}");
`;

const Wrapper = ({ children, backgroundColor, width, height,backgroundImage }) => (
  <WrapperStyled
    height={height}
    width={width}
    backgroundColor={backgroundColor}
    backgroundImage={backgroundImage}
  >
    {children}
  </WrapperStyled>
);

export { Wrapper };
