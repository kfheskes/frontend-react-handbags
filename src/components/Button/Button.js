import React from 'react';

function Button( {buttonType, children, buttonClickHandler, isDisabled}) {
    return (
        <button type={ buttonType} onClick={ buttonClickHandler} disabled={ isDisabled }>
            { children }
        </button>
    );
}

export default Button;