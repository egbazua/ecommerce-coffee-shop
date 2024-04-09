import React from 'react'

interface ProductTasteOriginProps {
  taste: string
  origin: string
}

const ProductTasteOrigin = ({ taste, origin }: ProductTasteOriginProps) => {
  return (
    <div className='flex items-center justify-between gap-3'>
      <p className='px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-bladck w-fit'>
        {taste}
      </p>
      <p className='px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit'>
        {origin}
      </p>
    </div>
  )
}

export default ProductTasteOrigin
