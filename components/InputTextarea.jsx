import React from 'react'

export default function InputTextarea({id, label, name, type, value, onChange}) {
    return (
        <>
        {label && <label htmlFor={id} className="block mb-[7px] font-[600]">{label}</label>}
        <textarea 
            className="block w-full py-2.5 text-sm px-5 rounded-lg text-gray-900 border border-gray-300 bg-gray-50"
            name={name} 
            id={id}
            value={value}
            onChange={onChange}
        >
            {value}
        </textarea>
    </>
    )
}
