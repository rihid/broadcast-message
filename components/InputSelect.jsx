import React from 'react'

export default function InputSelect({id, name, label,value, onChange, defaultText, options }) {
    return (
        <div className="...">
            {label && <label htmlFor={id} className="block mb-[7px] font-[600]">{label}</label>}
            <select 
                className="block w-full py-2.5 text-sm px-5 rounded-lg text-gray-900 border border-gray-300 bg-gray-5"
                name={name} 
                id={id}
                value={value}
                onChange={onChange}
                defaultText={defaultText}
            >
                {defaultText && <option value="">{defaultText}</option>}
                {options?.map( (item, index) => 
                    <option key={index} value={item.id}>{item.name}</option> 
                )}
            </select>
            
        </div>
    )
}
