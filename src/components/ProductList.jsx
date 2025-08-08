import React from 'react'

function ProductList({product}) {
  console.log(product)
  return (
    <div className='bg-white shadow-md rounded-sm text-center'>
        <img className="w-full h-40 object-cover" src={product.image} alt="image" />

        <h2 className='text-lg font-semibold'>{product.name}</h2>
        <p className='text-gray-800'>₹{product.price}</p>

        

    </div>
  )
}

export default ProductList