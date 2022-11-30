import React from 'react';
import Checkbox from '../../ui-lib/checkbox/checkbox';

const FormCheckbox = ({ id, name, htmlFor, label }) => {
    return (
        <div className="flex items-center">
            <Checkbox id={id} name={name} />
            <label
                htmlFor={htmlFor}
                className="ml-2 block text-sm text-gray-900"
            >
                {label}
            </label>
        </div>
    );
};

export default FormCheckbox;
