import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  height: ${props => props.height || "14px"};
  width: ${props => props.width || "100%"};
  background-color: ${props => props.backgroundColor || "#fff"};
`;

const Wrapper = ({ children, backgroundColor, width, height }) => (
  <WrapperStyled
    height={height}
    width={width}
    backgroundColor={backgroundColor}
  >
    {children}
  </WrapperStyled>
);

export { Wrapper };
