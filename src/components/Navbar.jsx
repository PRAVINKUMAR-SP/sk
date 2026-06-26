import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const links = ['Home', 'Categories', 'Cart', 'Orders', 'About', 'Login']

    return (
        <nav className="bg-[#e5f3e5] px-4 py-3 sm:px-6 lg:px-30">
            <div className="mx-auto flex items-center justify-between">
                <div className="logo">
                    <h1 className="text-2xl font-bold text-[#045b04] sm:text-3xl lg:text-[32px]">
                        S<span className="text-[#d5c109]">K</span>~NAIL
                    </h1>
                </div>

                <button
                    className="rounded-md border border-[#045b04] p-2 text-[#045b04] sm:hidden"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label="Toggle navigation menu"
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <div className="hidden sm:block">
                    <ul className="flex items-center gap-6 font-semibold text-base lg:gap-14 lg:text-lg">
                        {links.map((link) => (
                            <li key={link} className="cursor-pointer text-[#045b04] hover:text-[#d5c109]">
                                {link}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {isMenuOpen && (
                <div className="mt-3 rounded-lg border border-[#045b04]/20 bg-white/80 p-3 shadow-sm sm:hidden">
                    <ul className="flex flex-col gap-2 font-semibold text-[#045b04]">
                        {links.map((link) => (
                            <li key={link} className="cursor-pointer rounded px-2 py-1 hover:bg-[#e5f3e5]">
                                {link}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar