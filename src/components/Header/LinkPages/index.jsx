import React from 'react';
import './style.scss'

function LinkPage() {
    return (
        <div className='link-page'>
            <a href='http://reactplus.vn/'>
                <div  className='link-wrapper'>
                    <img src={ require('../../images/vn.png') } alt='vn' />
                </div>
            </a>
            <a href='https://reactplus.com/home'>
                <div className='link-wrapper'>
                    <img src={ require('../../images/co-nhat.webp') } alt='jp' />
                </div>
            </a>
        </div>
    );
}

export default LinkPage;