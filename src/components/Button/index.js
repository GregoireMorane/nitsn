import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: ${props => props.width || null};
  height: ${props => props.height || null};
  background-color: ${props => props.backgroundColor || null};
  border: ${props => props.border || null};
  text-align: ${props => props.textAlign || 'center'};
  color: ${props => props.color || 'initial'};
  font-size: ${props => props.fontSize || '16px'};
  text-decoration: ${props => props.textDecoration || 'none'};
  padding: ${props => props.padding || '10px'};
  margin: ${props => props.margin || '10px'};
  display: ${props => props.display || 'initial'};
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
  display,
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
