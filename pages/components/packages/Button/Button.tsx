import { Icon } from '@material-ui/core';

import * as React from 'react';
import styled, { css } from 'styled-components';
import { ButtonBase } from '../styled';

const ButtonR = styled(ButtonBase).attrs(props => {
  switch (props.mode) {
    case "outlined":
      return { className: `border  ` };
    case "contained":
      return { className: ` shadow-lg ` };

    default:
      return css``;
  }})`  
  ${props => {
  switch (props.mode) {
    case "simpled":
      return css`
      border-color: ${props.theme.colors.primary};
      `;
    case "outlined":
      return css`
      border-color: ${props.theme.colors.primary};
      `;
    case "contained":
      return css`
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.text};
  `;
    default:
      return css`
       color:${props => props.theme.colors.text};
      :hover{
        background-color: rgba(255, 255, 255, 0);
        color: ${props => props.theme.colors.primary};
      }
      `;
  }
}}
  

`;
const ButtonG = styled(ButtonR).attrs(props => {
  switch (props.size) {
    case "small":
      return { className: 'text-sm pl-1 pr-1 pt-2 pb-2 ' };
    case "medium":
      return { className: `text-md pl-3 pr-3 pt-2 pb-2 ` };
    case "largue":
      return { className: `text-lg pl-4 pr-4 pt-2 pb-2` };

    default:
      return css``;
  }
}
)``;

const Button = React.forwardRef(function Button(props: any, ref) {

  const {
    children,
    color = 'primary',
    component = 'button',
    className,
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth = false,
    size = 'small',
    startIcon: startIconProp,
    type,
    mode = 'text',
    ...other
  } = props;

  const ownerState = {
    ...props,
    color,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    size,
    type,
    mode,
  };

  const startIcon = startIconProp && (
    <Icon className='mr-2 '>{startIconProp}</Icon>
  );
  const endIcon = endIconProp && (
    <Icon className=' ml-2'>{endIconProp}</Icon>
  );
  return (
    <ButtonG
      size={size}
      mode={mode}
      ownerState={ownerState}
      className={'uppercase  ' + className}
      component={component}
      disabled={disabled}
      focusRipple={!disableFocusRipple}
      ref={ref}
      type={type}
      {...other}

    >
      {startIcon}
      {children}
      {endIcon}
    </ButtonG>
  );
});


export default Button;