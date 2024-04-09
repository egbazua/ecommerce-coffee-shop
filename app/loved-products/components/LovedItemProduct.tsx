import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/useCart'
import { useLovedProducts } from '@/hooks/useLovedProducts'
import { formatPrice } from '@/lib/formatPrice'
import { cn } from '@/lib/utils'
import { ProductType } from '@/types/product'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

interface LovedItemProductProps {
  product: ProductType,
}

const LovedItemProduct = ({ product }: LovedItemProductProps) => {
  const router = useRouter()
  const { removeLovedItem } = useLovedProducts()
  const { addItem } = useCart()

  return (
    <li className='flex py-6 border-b'>
      <div onClick={() => router.push(`/product/${product.attributes.slug}`)}>
        <img 
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.attributes.images.data[0].attributes.url}`} 
          alt="Product image" 
          className='w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32'
        />
      </div>
      <div className='flex justify-between flex-1 px-6'>
        <div>
          <h2 className='text-lg font-bold'>{product.attributes.productName}</h2>
          <p className='font-bold'>{formatPrice(product.attributes.price)}</p>
          <div className='flex items-center justify-between gap-3'>
            <p className='px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-bladck w-fit'>
              {product.attributes.taste}
            </p>
            <p className='px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit'>
              {product.attributes.origin}
            </p>
          </div>
          <Button className='mt-5 rounded-full'>Añadir al carrito</Button>
        </div>
        <div>
          <button className={cn('rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition')}>
            <X size={20} onClick={() => removeLovedItem(product.id)} />
          </button>
        </div>
      </div>
    </li>
  )
}

export default LovedItemProduct
