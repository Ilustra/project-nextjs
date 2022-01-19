import Icon from '@material-ui/core/Icon';
import { useState } from 'react';
import styled from 'styled-components';
import { Card, IconButton, Text } from '../packages';




export interface iConfig {
    max: any,
    min: any,
    default: any
}
export const config: iConfig = {
    default: {
        'position': 'relative',
        'max-height': '80vh',
        'max-width': '80vw',
        'width': '100vw',
        'height': '95%',
        'border-radius': ' 5px',
        'transition': '.1s',
        'margin': ' 10px',
    },
    max: {
        'position': 'fixed',
        'max-height': '100vh',
        'max-width': '100vw',
        'width': '98%',
        'height': '95%',
        'top': '0px',
        'left': '0px',
        'border-radius': ' 5px',
        'transition': '.1s',
        'margin': ' 10px',
    },
    min: {
        'position': 'absolute',
        'height': '50px',
        'width': '350px',
        'overflow': 'none',
        'bottom': '0',
        'left': '0',
        'transition': '.1s',
    }
}


interface ICard {
    className?: string;
    children?: any;
    title?: string
}

const WindowS = styled(Card).attrs({className: ' '})`
    ${props=>  props.config}
`;
const HeaderFrame = styled('div').attrs({className: ' flex items-center '})`
    background-color: ${props => props.theme.colors.background[300]};
`;

export default function FrameWindow({ children, className }: ICard): JSX.Element {

    const [configWindows, setConfigWindow] = useState('default');

    const handleExpand = () => { setConfigWindow(configWindows == 'max' ? 'default' : 'max') }
    const handleClosed = () => { }
    const handleMin = () => { setConfigWindow('min') }

    return (

        <WindowS config={config[`${configWindows}`]}  >

                <HeaderFrame className='  '>
                    <IconButton className='m-1' onClick={handleClosed}>close</IconButton>
                    <IconButton className='m-1' onClick={handleExpand}>home_max</IconButton>
                    <IconButton className='m-1' onClick={handleMin}>minimize</IconButton>
                    <Text>Home</Text>
                </HeaderFrame>

            {configWindows != 'min' &&  children}
        </WindowS>


    )
}
