import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  width: ${props => props.width || "14px"};
  height: ${props => props.height || "14px"};
  background-color: ${props => props.backgroundColor || "#7FFF00"};
  border: ${props => props.border || "none"};
  text-align: ${props => props.textAlign || "center"};
  color: ${props => props.color || "#ff0"};
  font-size: ${props => props.fontSize || "16px"};
  text-decoration: ${props => props.textDecoration || "none"};
  padding: ${props => props.padding || "10px"};
  margin: ${props => props.margin || "10px"};
  display: ${props => props.display || "inline-block"};
`;

const Button = ({
  text,
  action,
  width,
  height,
  backgroundColor,
  border,
  textAlign,
  color,
  fontSize,
  textDecoration,
  padding,
  margin,
  display
}) => (
  <ButtonStyled
    width={width}
    height={height}
    backgroundColor={backgroundColor}
    border={border}
    textAlign={textAlign}
    color={color}
    fontSize={fontSize}
    textDecoration={textDecoration}
    padding={padding}
    margin={margin}
    display={display}
    onClick={action}
  >
    {text}
  </ButtonStyled>
);

export { Button };
