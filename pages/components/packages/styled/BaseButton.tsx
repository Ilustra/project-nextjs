import styled from "styled-components";

const ButtonBase = styled.button.attrs({ className: 'p-2 flex items-center rounded ease-in duration-200 ' })`
  color: ${props => props.theme.colors.primary};
  :hover{
    background-color: ${props => props.theme.colors.secundary}; 
  }
`;



export default ButtonBase;