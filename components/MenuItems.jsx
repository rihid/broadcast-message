import React from 'react'

export default function MenuItems() {
    return (
        <div className="grid md:max-w-xs mx-4 md:mx-0 mb-[20px] grid-cols-3 bg-[#FFFFFF] rounded-lg">

            <button
                type="button"
                className={`px-5 py-2 text-[14px] font-semibold  rounded-lg bg-[#6f6fe3] hover:bg-[#4143d2] text-white`}
            // onClick={() => setTabActive(row.id)}
            >
                {/* {row.label} */}
                Kontak
            </button>
            <button
                type="button"
                className={`px-5 py-2 text-[14px] font-semibold text-[#333333]  rounded-lg hover:bg-gray-200`}
            // onClick={() => setTabActive(row.id)}
            >
                {/* {row.label} */}
                Pesan
            </button>
            <button
                type="button"
                className={`px-5 py-2 text-[14px] font-semibold text-[#333333]  rounded-lg hover:bg-gray-200`}
            // onClick={() => setTabActive(row.id)}
            >
                {/* {row.label} */}
                Pesan
            </button>

        </div>
    )
}
