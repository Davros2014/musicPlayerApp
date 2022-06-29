import React from 'react';
import { StyledHeader } from './Header.styles';
import Logo from './Loudly_type_logo_wht.png'

// type HeaderProps = {
//     children: JSX.Element[] | JSX.Element
// }

const Header = () => {
    return (
        <StyledHeader>
            <img src={Logo} alt="companyLogo"/>
            <nav>
                <li>Soundtracks</li>
                <li>AI Studio</li>
                <li>Music Maker JAM</li>
                <li>MAG</li>
                <li>About</li>
            </nav>
        </StyledHeader>
    );
};

export default Header;