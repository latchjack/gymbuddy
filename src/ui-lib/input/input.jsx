import React from 'react';

const Input = ({
    id,
    name,
    type,
    autoComplete,
    required,
    onChange,
    ...restProps
}) => {
    return (
        <input
            id={id}
            name={name}
            type={type}
            autoComplete={autoComplete}
            required={required}
            onChange={onChange}
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            {...restProps}
        />
    );
};

export default Input;
