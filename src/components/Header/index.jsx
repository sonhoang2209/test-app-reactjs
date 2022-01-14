import React from 'react';
import Navigation from './Navigation'
import Logo from './Logo';
import LinkPage from './LinkPages';

import './styles.scss'


function Header(props) {
    return (
        <header>
            <div className={props.type ? 'header header-active' : 'header'}>
                <div className='header-inner'>
                    <Logo />
                    <div className='block-right'>
                        <Navigation active={props.active} />
                        <LinkPage />        
                    </div>
                </div>
            </div>  
        </header>
    );
}

export default Header;