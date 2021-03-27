import styled from 'styled-components';
import { shade } from 'polished';

export const Content = styled.div`
    font-family: 'Poppins', sans-serif;
    padding: 10px;
`;

export const Form = styled.form`
    text-align: center;
`;

export const SubmitButton = styled.button`
    width: 70px;
    padding: 5px;
    height: 45px;
    border-radius: 5px;
    border: none;
    vertical-align: bottom;
    background-color: ${props => props.theme.colors.secundary};
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    margin-left: -70px;
    cursor: pointer;

    &:hover {
        background-color: ${props => shade(0.1, props.theme.colors.secundary)};
    }

    &:focus {
        outline: none;
    }

    &:active {
        outline: none;
        background-color: ${props => shade(0.2, props.theme.colors.secundary)};
    }
`;

export const UserContent = styled.div`
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1280px) {
        & {
            display: block;
        }
    }
`;

export const FloatElement = styled.div`
    @media only screen and (min-width: 1280px) {
        & {
            float: left;
        }
    }
`;

export const Repositories = styled.div`
    width: 35vw;
    max-width: 600px;
    margin: 0 auto;
    height: 45vh;
    min-height: 500px;
    overflow-y: auto;
    padding: 5px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 5px;
    box-shadow: ${props =>
    props.theme.title === 'light'
    ? `0 1px 5px 0 rgb(150, 150, 150, 30%)`
    : `0 1px 5px 0 rgb(0, 0, 0, 30%)`};

    @media only screen and (min-width: 1280px) {
        & {
            margin-left: 25px;
        }
    }

    @media only screen and (max-width: 1280px) {
        & {
            margin-top: 25px;
            width: 100%;
        }
    }
`;

export const BackgroundImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
    width: 50vw;
    max-width: 600px;
    height: 60vh;

    @media only screen and (max-width: 1280px) {
        & {
            width: 100%;
        }
    }
`;

export const FreepikLink = styled.a`
    color: ${props => shade(0.1, props.theme.colors.text)};
    font-style: italic;
    font-size: 12px;
    text-decoration: none;
    display: block;
    margin: 0 auto;
    width: fit-content;
`;