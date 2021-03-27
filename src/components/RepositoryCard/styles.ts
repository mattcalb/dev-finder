import styled from 'styled-components';
import { transparentize, shade } from 'polished';

export const Card = styled.div`
    margin: 15px;
    border-radius: 5px;
    background-color: ${props => transparentize(0.25, props.theme.colors.background)};
    color: ${props => props.theme.colors.text};
    padding: 15px;
    box-shadow: ${props =>
    props.theme.title === 'light'
    ? `0 1px 5px 0 rgb(150, 150, 150, 30%)`
    : `0 1px 5px 0 rgb(0, 0, 0, 30%)`};
`;

export const Name = styled.a`
    font-size: 18px;
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    font-weight: bold;
    display: block;
    width: fit-content;
`;

export const Description = styled.p`
    background-color: ${props => 
    props.theme.title === 'light'
    ? shade(0.03, props.theme.colors.background)
    : shade(0.1, props.theme.colors.background)};
    border-radius: 5px;
    padding: 15px;
    font-size: 15px;
    word-break: break-all;
`;

export const Language = styled.span`
    font-size: 14px;
`;

export const StargazerNumber = styled.span`
    display: inline-block;
    vertical-align: bottom;
    font-size: 14px;
`;