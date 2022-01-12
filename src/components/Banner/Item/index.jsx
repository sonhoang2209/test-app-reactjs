import React from 'react';
import './style.scss'

import Title from './Title';
import TextTransision from './Text';

function item(props) {
    return (
        <div className='item'>
            <div className='block-opacity'></div>
            <div className='item-image'>
                {/* <img src={ require('../../images/c.jpg') } alt='vn' /> */}
                <img src={ props.data.image } alt='vn' />
            </div>
            <div className='item-content'>
                <Title data={props.data.title} />
                <TextTransision text={props.data.text} />
            </div>
            <div className='arrow-btns'>
                <span onClick={()=> console.log('aa')} className="arrow-btn arrow-left"></span>
                <span className="arrow-btn arrow-right"></span>
            </div>
            <div className='dots'>

            </div>
        </div>
    );
}

export default item;