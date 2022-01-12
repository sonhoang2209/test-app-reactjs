import React from 'react';
import Navigation from './Navigation'
import Logo from './Logo';
import LinkPage from './LinkPages';

import './styles.scss'


function Header() {
    return (
        <header>
            <div className='header'>
                <div className='header-inner'>
                    <Logo />
                    <div className='block-right'>
                        <Navigation />
                        <LinkPage />        
                    </div>
                </div>
            </div>  
        </header>
    );
}

export default Header;