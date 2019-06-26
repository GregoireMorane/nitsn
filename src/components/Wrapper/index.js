import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  height: ${props => props.height || null};
  width: ${props => props.width || null};
  padding: ${props => props.padding || null};
  padding-top: ${props => props.paddingTop || null};
  margin: ${props => props.margin || null};
  background-color: ${props => props.backgroundColor || null};
  background-size: ${props => props.backgroundSize || null};
  background-image: url("${props => props.backgroundImage || null}");
  background-repeat:${props => props.backgroundRepeat || null};
  position: ${props => props.position || null};
  top: ${props => props.top || null};
  bottom: ${props => props.bottom || null};
  left: ${props => props.left || null};
  right: ${props => props.right || null};
  display: ${props => props.display || null};
  flex-direction: ${props => props.flexDirection || null};
  flex: ${props => props.flex || null};
  border: ${props => props.border || null};
  border-left: ${props => props.borderLeft || null};
  border-bottom: ${props => props.borderBottom || null};
  align-items: ${props => props.alignItems || null};
  justify-content: ${props => props.justifyContent || null};
`;
const Wrapper = ({
  children,
  backgroundColor,
  width,
  height,
  backgroundImage,
  backgroundRepeat,
  backgroundSize,
  padding,
  paddingTop,
  margin,
  position,
  top,
  bottom,
  left,
  right,
  flexDirection,
  display,
  flex,
  border,
  borderTop,
  borderBottom,
  borderRight,
  borderLeft,
  alignItems,
  justifyContent,
  action
}) => (
  <WrapperStyled
    height={height}
    width={width}
    backgroundColor={backgroundColor}
    backgroundImage={backgroundImage}
    backgroundRepeat={backgroundRepeat}
    backgroundSize={backgroundSize}
    padding={padding}
    paddingTop={paddingTop}
    margin={margin}
    position={position}
    right={right}
    left={left}
    bottom={bottom}
    top={top}
    flexDirection={flexDirection}
    display={display}
    flex={flex}
    border={border}
    borderTop={borderTop}
    borderBottom={borderBottom}
    borderRight={borderRight}
    borderLeft={borderLeft}
    alignItems={alignItems}
    justifyContent={justifyContent}
    onClick={action}
  >
    {children}
  </WrapperStyled>
);

export { Wrapper };
