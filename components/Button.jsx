import React from 'react'

export default function Button({type, label, color, onClick}) {
  return (
    <button
        type={type || 'button'}
        className={`
            w-full md:w-auto text-sm text-center font-medium px-5 py-2.5 rounded-lg
            ${color === 'secondary' ? 'bg-slate-200 hover:bg-slate-300 border-slate-200' : 'bg-[#6f6fe3] hover:bg-[#4143d2] text-white'}

        `}
        onClick={onClick}
    >
        {label}
    </button>
  )
}
