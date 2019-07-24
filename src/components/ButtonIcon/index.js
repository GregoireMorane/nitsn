import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: ${props => props.width || null};
  height: ${props => props.height || null};
  background-color: ${props => props.backgroundColor || 'rgb(0,0,0,0)'};
  border: ${props => props.border || 'none'};
  padding: ${props => props.padding || '0'};
  margin: ${props => props.margin || '0'};
  display: ${props => props.display || 'initial'};
`;

const ButtonIcon = ({
  icon,
  action,
  width,
  height,
  backgroundColor,
  border,
  color,
  padding,
  margin,
  display,
}) => (
  <ButtonStyled
    width={width}
    height={height}
    backgroundColor={backgroundColor}
    border={border}
    color={color}
    padding={padding}
    margin={margin}
    display={display}
    onClick={action}
    icon={icon}
  >
    <img src={icon} alt="icon" width={width} height={height} />
  </ButtonStyled>
);

export { ButtonIcon };
