import React from "react";
import styled from "styled-components";

const TypoStyled = styled.p`
  font-size: ${props => props.fontSize || "14px"};
  line-height: ${props => props.lineHeight || "14px"};
  color: ${props => props.color || "#7FFF00"};
  text-align: ${props => props.textAlign || "center"};
`;

const Typo = ({ text, color, textAlign, lineHeight, fontSize }) => (
  <TypoStyled
    color={color}
    textAlign={textAlign}
    fontSize={fontSize}
    lineHeight={lineHeight}
  >
    {text}
  </TypoStyled>
);

export { Typo };
