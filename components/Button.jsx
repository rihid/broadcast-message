import React from 'react'

export default function Button({type, label, onClick}) {
  return (
    <button
        type={type || 'button'}
        className="text-white text-sm text-center font-medium bg-blue-500 hover:bg-blue-600 px-5 py-2.5 rounded-full "
        onClick={onClick}
    >
        {label}
    </button>
  )
}
