import React from 'react'

const Products = () => {
    return (
        <div className="products mx-auto mt-8 w-[94%] max-w-7xl">
            <h1 className="mb-4 text-2xl font-bold text-[#045b04] sm:text-3xl">Products</h1>
            <div className="container grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="card flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md">
                    <img className="h-auto w-full max-w-[200px] object-contain" src="https://tse4.mm.bing.net/th/id/OIP.gqIZvCMt3GPAsoh0bQ8nGgHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Product sample" />
                    <h3 className="mt-4 text-xl font-bold text-[#045b04]">Product Name</h3>
                    <p className="mt-2 text-center text-sm text-gray-600 sm:text-base">Product description goes here.</p>
                    <button className="mt-4 w-full rounded bg-blue-500 px-4 py-2 font-bold text-white transition hover:bg-blue-700 sm:w-auto">
                        Add to Cart
                    </button>
                </div>
                <div className="card flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md">
                    <img className="h-auto w-full max-w-[200px] object-contain" src="https://m.media-amazon.com/images/I/71ojOB3snXL.jpg" alt="Product sample" />
                    <h3 className="mt-4 text-xl font-bold text-[#045b04]">Product Name</h3>
                    <p className="mt-2 text-center text-sm text-gray-600 sm:text-base">Product description goes here.</p>
                    <button className="mt-4 w-full rounded bg-blue-500 px-4 py-2 font-bold text-white transition hover:bg-blue-700 sm:w-auto">
                        Add to Cart
                    </button>
                </div>
                <div className="card flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md">
                    <img className="h-auto w-full max-w-[200px] object-contain" src="https://i5.walmartimages.com/seo/Uxcell-40-Pack-Small-Tiny-Nails-2x15mm-DxL-Tiny-Brass-Nails-Hardware-Nails-Small-Nail-Brass-Tone_4618fc44-471a-47bd-83b7-73b3932eb817.aa676180d0fb94f234ad7de32e613117.jpeg" alt="Product sample" />
                    <h3 className="mt-4 text-xl font-bold text-[#045b04]">Product Name</h3>
                    <p className="mt-2 text-center text-sm text-gray-600 sm:text-base">Product description goes here.</p>
                    <button className="mt-4 w-full rounded bg-blue-500 px-4 py-2 font-bold text-white transition hover:bg-blue-700 sm:w-auto">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Products