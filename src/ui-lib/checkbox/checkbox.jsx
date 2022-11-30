import React from 'react';

const Checkbox = ({ id, name }) => {
    return (
        <input
            id={id}
            name={name}
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
    );
};

export default Checkbox;
