import { ProductType } from '@/types/product'
import React from 'react'

export type InfoProductProps = {
  product: ProductType
}

const InfoProduct = ({ product }: InfoProductProps) => {
  return (
    <div className='justify-between mb-3 sm:flex'>
      <h1 className='text-2xl'>{product.attributes.productName}</h1>
      <div className='flex items-center justify-between gap-3'>
        <p className='px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit'>
          {product.attributes.taste}
        </p>
        <p className='px-2 py-1 text-xs bg-yellow-900 rounded-full w-fit'>
          {product.attributes.origin}
        </p>
      </div>
    </div>
  )
}

export default InfoProduct
