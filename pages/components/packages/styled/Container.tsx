import styled from "styled-components";

export const Container = styled.div.attrs({className:''})`
    background-color: ${props => props.theme.colors.background};
    transition: .1s;
`;


export default Container;