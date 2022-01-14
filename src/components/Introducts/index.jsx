import React from 'react';
import TestAxios from './Test';
import './style.scss'

function Introducts(props) {
    return (
        <div className='introduct'>
            <p>Introducts</p>
            <TestAxios />
        </div>
    );
}

export default Introducts;