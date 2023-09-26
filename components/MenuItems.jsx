import React from 'react'
import Link from 'next/link'
import menus from '@/data/menuItems.json'

export default function MenuItems({slug}) {
    return (
        <div className="grid md:max-w-xs mx-4 md:mx-0 mb-[20px] grid-cols-3 bg-[#FFFFFF] rounded-lg">
            {menus.map( (menu, index) => 
                <button
                    key={index}
                    type="button"
                    className={`px-5 py-2 text-[14px] font-semibold text-[#333333]  rounded-lg ${menu?.slug === slug ? 'bg-[#6f6fe3] hover:bg-[#4143d2] text-white' : 'hover:bg-gray-200'}`}
                >
                    <Link href={menu?.path}>{menu?.name}</Link>
                </button>
            )}
            {/* <button
                type="button"
                className={`px-5 py-2 text-[14px] font-semibold  rounded-lg bg-[#6f6fe3] hover:bg-[#4143d2] text-white`}
            >
                Kontak
            </button>
            <button
                type="button"
                className={`px-5 py-2 text-[14px] font-semibold text-[#333333]  rounded-lg hover:bg-gray-200`}
            >
                Pesan
            </button>
            <button
                type="button"
                className={`px-5 py-2 text-[14px] font-semibold text-[#333333]  rounded-lg hover:bg-gray-200`}
            >
                Pesan
            </button> */}

        </div>
    )
}
