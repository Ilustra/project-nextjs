import styled from 'styled-components';


export const Container = styled.div`
    height: 100vh;
    left: 0;
    position: relative;
    transition: .1s;
    width: ${(props: { expanedMenu: any }) => props.expanedMenu ? '200px' : '50px'};
    background-color: #071f33;
    @media screen and (max-width: 600px) {
        position: absolute;
        transition: .2s;
        left: -200px;
    }
`;
export const ExpanedMenu = styled.div`
    height:${props => props.expaned ? 'auto' : '5px'} ;
    transition: .1s;
`;
export const A = styled.a`
    position: relative;
    width: 100%;
    border-width: thin;
    text-align: left;
    align-items: center;
    display: flex;
    padding: 10px;
    font-size: 16px;
    border: none;
    color: #fff;
    background-color: none;
    :hover{
        transition: .1s;
        color: #ff7b00;
    }
`;

export const Ul = styled.ul`
    position: relative;
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    width: 100%;
  
`;

export const Li = styled.li`
    position: relative;
    list-style-type: none;
    margin: 0px;
    padding: 0px;
`;

export const Text = styled.span`
    display: ${(props: { visible: any; }) => props.visible ? 'none' : 'hiden'};
    transition: .1s;
`;
export const BodyMenu = styled.div`
    height: 80vh;
    position: relative;
    overflow: auto;
    overflow-x: hidden;
    ::-webkit-scrollbar {
    width: 12px;               
    }
    ::-webkit-scrollbar-track {
    background: #071f33;        
    }
    ::-webkit-scrollbar-thumb {
    background-color: #092b49;    
    border-radius: 20px;       
    border: 4px solid #071f33;  
    }
`;

