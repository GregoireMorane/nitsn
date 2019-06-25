import React from "react";
import styled from "styled-components";

const TypoStyled = styled.p`
  font-size: ${props => props.fontSize || "14px"};
  line-height: ${props => props.lineHeight || "14px"};
  color: ${props => props.color || "#7FFF00"};
  text-align: ${props => props.textAlign || "center"};
  margin: ${props => props.margin || "0px"};
  padding: ${props => props.padding || "0px"};
  letter-spacing: ${props => props.letterSpacing || "0px"};
`;

const Typo = ({
  text,
  color,
  textAlign,
  lineHeight,
  fontSize,
  margin,
  padding,
  letterSpacing
}) => (
  <TypoStyled
    color={color}
    textAlign={textAlign}
    fontSize={fontSize}
    lineHeight={lineHeight}
    margin={margin}
    padding={padding}
    letterSpacing={letterSpacing}
  >
    {text}
  </TypoStyled>
);

export { Typo };
