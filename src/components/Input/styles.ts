import styled from "styled-components";
import { shade, transparentize } from 'polished';

export const TextInputField = styled.input`
    width: 50vw;
    max-width: 600px;
    height: 45px;
    background-color: ${props => 
        props.theme.title === 'light' 
        ? shade(0.025, props.theme.colors.background) 
        : shade(0.1, props.theme.colors.background)};
    color: ${(props) => props.theme.colors.text};
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    border-radius: 5px;
    border: none;
    padding: 10px;
    padding-right: 80px;

    @media only screen and (max-width: 1280px) {
        & {
            width: 100%;
        }
    }

    &:focus {
        outline: none;
    }

    ::placeholder {
        color: ${props => transparentize(0.4, props.theme.colors.text)};
    }
`;
