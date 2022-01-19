import Icon from '@material-ui/core/Icon';
import { Key, useState } from 'react';

import {  Container, Surface } from '../styled';


import styled from 'styled-components';
import TextField from '../components/text-fields/TextField';
import TextFieldPass from '../components/text-fields/TextFieldPass';


export const Div = styled.div`
    position: relative;
    display: flex;
    height:90vh; 
    top: 10vh; 
    z-index: 1;
    background-color: #d4d4d4;
    justify-content: center;
    align-items: center;
`;
export const Card = styled.div`
    width: ${props => props.expaned ? '100vw':'95%'}; 
    height:${props => props.expaned ? '100vh':'95%'}; 
    top: ${props => props.expaned && '0px'};
    left: ${props => props.expaned && '0px'};

    position:${props => props.expaned ? 'fixed': 'relative'};
    border-radius: 5px;
    transition: .1s;
`;

export default function Dashboard(): JSX.Element {
    

    return (

                <Card style={{}}>

                    <TextField className='m-4' label='Usuário' />
                    <div className='row items-center flex'>
                    <TextField mode='outlined' className='m-4' label='CPF' />
                    <TextField className='m-4' label='Nascimento' />
                    <TextFieldPass name='password' label='Password' />
                    </div>
                </Card>

    )
}
