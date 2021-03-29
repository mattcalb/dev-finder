import styled from "styled-components";
import { transparentize } from 'polished';

export const HeaderContainer = styled.header`
  font-family: 'Poppins', sans-serif;
  text-align: center;
  background-color: ${props => transparentize(0.75, props.theme.colors.primary)};
`;

export const Title = styled.h1`
  font-size: 30px;
  color: ${props => props.theme.colors.text};
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  color: ${props => props.theme.colors.text};
`;
