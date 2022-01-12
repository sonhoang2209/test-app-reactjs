import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
    btnFunction : PropTypes.func,
    text: PropTypes.string
};

export function ButtonImage(props) {
    return (
        <div>
            <button onClick={props.btnFunction}>
                <img src={props.imageSource} />
            </button>
        </div>
    );
}

function Button(props) {
    return (
        <div>
            <button onClick={props.btnFunction}>{props.text}</button>
        </div>
    );
}

export default Button;