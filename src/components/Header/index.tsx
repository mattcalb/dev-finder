import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { ToggleThemeContext } from '../../context/ToggleThemeContext';
import { shade } from 'polished';
import { Code } from '@styled-icons/entypo/Code';

import { HeaderContainer, Subtitle, Title } from './styles';

const Header: React.FC = () => {
    const { colors, title } = useContext(ThemeContext);
    const { toggleTheme } = useContext(ToggleThemeContext);

    return (
        <>
            <HeaderContainer>
                <Title>dev-Finder<Code size={35}/></Title>
                <Subtitle>Your app to search for developers</Subtitle>
                <Switch
                    onChange={toggleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    onHandleColor={colors.text}
                    offHandleColor={colors.text}
                    onColor={colors.secundary}
                    offColor={shade(0.3, colors.primary)} />
            </HeaderContainer>
        </>
    )
};

export default Header;