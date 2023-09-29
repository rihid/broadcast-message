import React from 'react'

export default function Input({type, label, id, name, placeholder, value, onChange}) {
    return (
        <>
            {label && <label htmlFor={id} className="block mb-[7px] font-[600]">{label}</label>}
            <input 
                type={type || 'text'} 
                className={`block w-full py-2.5 text-sm rounded-lg ${type == 'search' ? 'pl-10 pr-5' : 'px-5'} text-gray-900 border border-gray-300 bg-gray-50`}
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </>
    )
}
