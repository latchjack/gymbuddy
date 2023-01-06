import React from 'react';

function Button({ disabled, label, onClick, ...restProps }) {
    return (
        <button
            className="bg-green-600 text-sm text-gray-900 font-semibold px-2 shadow-md rounded-lg"
            disabled={disabled}
            onClick={onClick}
            {...restProps}
        >
            {label}
        </button>
    );
}

export default Button;
