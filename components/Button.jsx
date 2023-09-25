import React from 'react'

export default function Button({type, label, onClick}) {
  return (
    <button
        type={type || 'button'}
        className="text-white w-full md:w-auto text-sm text-center font-medium bg-[#6f6fe3] hover:bg-[#4143d2] px-5 py-2.5 rounded-lg "
        onClick={onClick}
    >
        {label}
    </button>
  )
}
