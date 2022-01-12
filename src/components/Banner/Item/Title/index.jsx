import React from 'react';
import './style.scss'

function Title(props) {
    return (
        <div className='banner-title'>
            <img src={ require('../../../images/slide-title-border.png') } alt='vn' />
            <h3>{props.data}</h3>
            <img src={ require('../../../images/slide-title-border.png') } alt='vn' />
        </div>
    );
}

export default Title;