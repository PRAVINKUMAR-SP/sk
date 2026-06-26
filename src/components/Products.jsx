import React from 'react'

const Products = () => {
    return (
        <div className="products w-[94%] m-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <div className="container grid grid-cols-3 gap-4">
                <div className="card flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
                    <img className='w-[200px] h-auto' src="https://tse4.mm.bing.net/th/id/OIP.gqIZvCMt3GPAsoh0bQ8nGgHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                    <h3 className="text-xl font-bold mt-4">Product Name</h3>
                    <p className="text-gray-600 mt-2">Product description goes here.</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add to Cart
                    </button>
                </div>
                <div className="card flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
                    <img className='w-[200px] h-auto' src="https://m.media-amazon.com/images/I/71ojOB3snXL.jpg" alt="" />
                    <h3 className="text-xl font-bold mt-4">Product Name</h3>
                    <p className="text-gray-600 mt-2">Product description goes here.</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add to Cart
                    </button>
                </div>
                <div className="card flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
                    <img className='w-[200px] h-auto' src="https://i5.walmartimages.com/seo/Uxcell-40-Pack-Small-Tiny-Nails-2x15mm-DxL-Tiny-Brass-Nails-Hardware-Nails-Small-Nail-Brass-Tone_4618fc44-471a-47bd-83b7-73b3932eb817.aa676180d0fb94f234ad7de32e613117.jpeg" alt="" />
                    <h3 className="text-xl font-bold mt-4">Product Name</h3>
                    <p className="text-gray-600 mt-2">Product description goes here.</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add to Cart
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default Products