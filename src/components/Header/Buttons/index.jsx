import React from 'react';

function Buton(props) {
    return (
        <a href={props.href}>
            <div  className='link-wrapper'>
                <img src={ props.imgSource } alt='vn' />
            </div>
        </a>
    );
}

export default Buton;