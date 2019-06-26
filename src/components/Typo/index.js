import React from "react";
import styled from "styled-components";

const TypoStyled = styled.p`
  font-size: ${props => props.fontSize || "14px"};
  line-height: ${props => props.lineHeight || "14px"};
  font-weight: ${props => props.fontWeight || "initial"};
  color: ${props => props.color || "initial"};
  text-align: ${props => props.textAlign || "center"};
  margin: ${props => props.margin || "auto"};
  padding: ${props => props.padding || null};
  letter-spacing: ${props => props.letterSpacing || null};
`;

const Typo = ({
  text,
  color,
  textAlign,
  lineHeight,
  fontSize,
  margin,
  padding,
  letterSpacing,
  fontWeight
}) => (
  <TypoStyled
    color={color}
    textAlign={textAlign}
    fontSize={fontSize}
    lineHeight={lineHeight}
    margin={margin}
    padding={padding}
    letterSpacing={letterSpacing}
    fontWeight={fontWeight}
  >
    {text}
  </TypoStyled>
);

export { Typo };
