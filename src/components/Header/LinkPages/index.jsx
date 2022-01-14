import React from 'react';
import './style.scss'
import Buton from '../Buttons';

function LinkPage() {
    return (
        <div className='link-page'>
            <Buton href='http://reactplus.vn/' imgSource='https://react-plus.com/images/logo/vn.png' />
            <Buton href='https://react-plus.com/home' imgSource='https://react-plus.com/images/logo/co-nhat.webp' />
        </div>
    );
}

export default LinkPage;