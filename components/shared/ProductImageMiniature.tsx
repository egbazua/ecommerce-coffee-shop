import { useRouter } from 'next/navigation'
import React from 'react'

interface ProductImageMiniatureProps {
  slug: string,
  url: string,
}

const ProductImageMiniature = ({ slug, url }: ProductImageMiniatureProps) => {
  const router = useRouter()

  return (
    <div onClick={() => router.push(`/product/${slug}`)} className='cursor-pointer'>
      <img
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`} 
        alt="Product Image"
        className='w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32' 
      />
    </div>
  )
}

export default ProductImageMiniature
