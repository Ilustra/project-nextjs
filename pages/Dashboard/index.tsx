import Icon from '@material-ui/core/Icon';
import { Key, useState } from 'react';

import {  Container, Surface } from '../styled';


import styled from 'styled-components';
import TextField from '../components/text-fields/TextField';


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
    background-color: #fff; 
    position:${props => props.expaned ? 'fixed': 'relative'};
    border-radius: 5px;
    transition: .1s;

`;

export default function Dashboard(): JSX.Element {
    
    const [expanedContainer, setExpanedContainer] = useState(false);

    const handleExpand =()=>{
            setExpanedContainer(!expanedContainer)
    }

    return (

                
                <Card expaned={expanedContainer} style={{}}>
                    <Icon title={expanedContainer ? 'voltar ao tamanho normal ' : 'expandir para tela interia'} style={{ fontSize: 16, color: '#c7c7c7'}} onClick={handleExpand}>{expanedContainer ? 'close_fullscreen ': 'open_in_full'}</Icon>
                    <button ></button>
                    <TextField className='m-4' label='Usuário' />
                    <div className='row items-center flex'>
                    <TextField mode='outlined' className='m-4' label='CPF' />
                    <TextField className='m-4' label='Nascimento' />
                    </div>
                </Card>

    )
}
