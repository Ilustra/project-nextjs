import styled from 'styled-components';

const Card = styled.div`
    width: 100%; 
    height:90%; 
    background-color:  #fff;
    border-radius: 5px;
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

interface ICard {
    className?: string;
    children?: any;
    title?: string
}

export default function CardS({ children, className }: ICard): JSX.Element {

    return (
        <Card className={' ' + className} >
   
            {children}
            
        </Card>


    )
}
