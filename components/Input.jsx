import React from 'react'

export default function Input({type, label, id, name, value, onChange}) {
    return (
        <>
            {label && <label htmlFor={id} className="block mb-[7px] font-[600]">{label}</label>}
            <input 
                type={type || 'text'} 
                className={`block w-full py-2.5 text-sm ${type == 'search' ? 'pl-10 pr-5 rounded-full' : 'px-5 rounded-lg'} text-gray-900 border border-gray-300 bg-gray-50`}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            />
        </>
    )
}
