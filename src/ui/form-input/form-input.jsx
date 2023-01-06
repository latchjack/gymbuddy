import React from 'react';
import Input from '../../ui-lib/input/input';

// TODO - build required asterisk, maxLength, error handler box
const FormInput = ({
    id,
    label,
    htmlFor,
    name,
    type,
    autoComplete,
    required,
    onChange,
    ...restProps
}) => {
    return (
        <>
            <div>
                <label
                    htmlFor={htmlFor}
                    className="block text-sm font-medium text-gray-700"
                >
                    {label}
                </label>
                <div className="mt-1">
                    <Input
                        id={id}
                        name={name}
                        type={type}
                        autoComplete={autoComplete}
                        required={required}
                        onChange={onChange}
                        {...restProps}
                    />
                </div>
            </div>
        </>
    );
};

export default FormInput;
