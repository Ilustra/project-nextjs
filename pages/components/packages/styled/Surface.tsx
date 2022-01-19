import styled from "styled-components";

export const Surface = styled.div.attrs({className:''})`
    background-color: ${props => props.theme.colors.back};
    transition: .1s;
    overflow: scroll;
    ::-webkit-scrollbar {
    width: 5px;               
    }
    ::-webkit-scrollbar-track {
    background: none;        
    }
    ::-webkit-scrollbar-thumb {
    background-color: #c7c7c7;    
    border-radius: 20px;       
    border: none;  
    }
`;


export default Surface;