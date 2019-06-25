import React from "react";
import styled from "styled-components";

const TypoStyled = styled.h1`
  font-size: ${props => props.fontSize || "14px"};
  line-height: ${props => props.lineHeight || "14px"};
  color: ${props => props.color || "#7FFF00"};
  text-align: ${props => props.textAlign || "left"};
`;

const Typo = ({ text, color, textAlign, lineHeight, fontSize }) => (
  <TypoStyled color={color} align={textAlign} size={fontSize} line={lineHeight}>
    {text}
  </TypoStyled>
);

export { Typo };
