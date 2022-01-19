import Icon from '@material-ui/core/Icon';
import { Key, useState } from 'react';

import styled from 'styled-components';
import { Container } from '../components/packages';



export const Div = styled(Container).attrs({className:'drop-shadow-md '})`
    background-color: ${props=> props.theme.colors.background};
    position: absolute;
    width: 100vw;
    height: 10vh;

`;


export default function Header(): JSX.Element {
    return (
        <Div style={{  }}>
           
        </Div>
    )
}
