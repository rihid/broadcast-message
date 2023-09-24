import React from 'react'
import Image from 'next/image'
import Icon from './Icon'

export default function Navbar() {
    return (
        <nav className="top-0 w-full bg-[#FFFFFF]">
            <div className="max-w-full md:max-w-5xl mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex items-center justify-start gap-[7px]">
                        {/* <a href="#">
                            <Image src={BamahaLogo} width={35} height={35} alt="image" />
                            Test
                        </a> */}
                        <a href="#" className="font-bold text-[18px] leading-7">
                            <span>Broadcast App</span>
                        </a>
                    </div>
                    <div
                        className="font-semibold text-gray-500 my-[10px] px-[38px] py-[10px] flex items-center gap-2 cursor-pointer"
                        // onClick={() => signOut({
                        //     callbackUrl: process.env.NEXT_PUBLIC_ADMIN_SIGNIN_URL
                        // })}
                    >
                        <Icon name="icon-sign-out" size={20} />
                        <span>Keluar</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}
