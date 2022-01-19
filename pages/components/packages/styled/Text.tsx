import styled from "styled-components";

export const Text = styled.a.attrs({className:''})`
    color: ${props => props.theme.colors.text};
    transition: .1s;
`;


export default Text;