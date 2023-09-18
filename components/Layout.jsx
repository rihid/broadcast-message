import React from 'react'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({children}) {
    return (
        <main
            className={`min-h-screen ${inter.className}`}
        >
            <Navbar/>
            {children}
        </main>
    )
}
