import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar flex justify-between items-center p-4 bg-[#e5f3e5] p-2 pl-30 pr-30">
            <div className="logo">
                <h1 className="text-[32px] text-[#045b04] font-bold ">S<span className="text-[#d5c109]">K</span>~NAIL</h1>
            </div>
            <div className="navlinks">
                <ul className="flex gap-14 font-semibold text-lg">
                    <li className="text-[#045b04] font-semibold hover:text-[#d5c109] cursor-pointer">Home</li>
                    <li className="text-[#045b04] font-semibold hover:text-[#d5c109] cursor-pointer">Categories</li>
                    <li className="text-[#045b04] font-semibold hover:text-[#d5c109] cursor-pointer">Cart</li>
                    <li className="text-[#045b04] font-semibold hover:text-[#d5c109] cursor-pointer">Orders</li>
                    <li className="text-[#045b04] font-semibold hover:text-[#d5c109] cursor-pointer">About</li>
                    <li className="text-[#045b04] font-semibold hover:text-[#d5c109] cursor-pointer">Login</li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar