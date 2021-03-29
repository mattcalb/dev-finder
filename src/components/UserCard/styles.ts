import styled from 'styled-components';
import { transparentize, shade } from 'polished';

export const Card = styled.div`
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.colors.text};
    width: 35vw;
    max-width: 600px;
    height: fit-content;
    min-height: 45vh;
    border-radius: 5px;
    margin: 0 auto;
    background-color: ${props => props.theme.colors.primary};
    text-align: center;
    padding: 15px;
    box-shadow: ${props =>
    props.theme.title === 'light'
    ? `0 1px 5px 0 rgb(150, 150, 150, 30%)`
    : `0 1px 5px 0 rgb(0, 0, 0, 30%)`};

    @media only screen and (max-width: 1280px) {
        & {
            width: 100%;
        }
    }
`;

export const ProfilePicture = styled.img`
    border-radius: 50%;
    width: 175px;
    height: 175px;
    margin: 0 0 10px 0;
`;

export const Name = styled.h2`
    font-size: 18px;
`;

export const Login = styled.p`
    font-size: 16px;
    margin: 5px 0 5px;
`;

export const PublicRepositories = styled.span`
    font-size: 15px
`;

export const Bio = styled.p`
    background-color: ${props => transparentize(0.25, props.theme.colors.background)};
    border-radius: 5px;
    padding: 15px;
`;

export const Followers = styled.div`
    margin: 10px 0 10px 0;
`;

export const Location = styled.span`
    display: inline-block;
    vertical-align: middle;
    font-size: 15px;
`;

export const GitHubLink = styled.a`
    text-decoration: none;
    color: white;
    display: block;
    margin: 0 auto;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.secundary};
    padding: 10px;
    margin-top: 10px;
    width: 150px;
    font-size: 15px;
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