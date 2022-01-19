import React, { ReactNode, useState } from "react"

import Icon from '@material-ui/core/Icon';
import styled from "styled-components";


export interface IconButton {
    color?: string,
    type?: 'submit' | 'reset' | 'button' | undefined,
    label?: string;
    children?: ReactNode;
    onClick?: () => void;
    formId? : string;
    disabled? : boolean;
    className?: string;
}

const ButtonBase = styled.button.attrs({className: 'p-1 flex items-center hover:shadow-md rounded-full ease-in duration-200  '})``;

const IconP = styled(Icon).attrs({className: ''})`
    color: ${props=> props.theme.colors.text}
`;

const IconButton = React.forwardRef(function Button(props: any, ref) {

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
        size='small',
        icon: icon,
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



    return (
        <ButtonBase
            size={size}
            mode={mode}
            ownerState={ownerState}
            className={' ' + className}
            component={component}
            disabled={disabled}
            focusRipple={!disableFocusRipple}
            ref={ref}
            type={type}
            {...other}

        >
                   <IconP   className=''>   {children}</IconP>
         
        </ButtonBase>
    );
});


export default IconButton;