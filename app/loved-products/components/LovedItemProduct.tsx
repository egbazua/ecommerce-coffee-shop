import ProductImageMiniature from '@/components/shared/ProductImageMiniature'
import ProductTasteOrigin from '@/components/shared/ProductTasteOrigin'
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

  const addToCheckout = () => {
    addItem(product)
    removeLovedItem(product.id)
  }

  return (
    <li className='flex p-6 border-b'>
      <ProductImageMiniature slug={product.attributes.slug} url={product.attributes.images.data[0].attributes.url} />
      <div className='flex justify-between flex-1 px-6'>
        <div>
          <h2 className='text-lg font-bold'>{product.attributes.productName}</h2>
          <p className='font-bold'>{formatPrice(product.attributes.price)}</p>
          <ProductTasteOrigin taste={product.attributes.taste} origin={product.attributes.origin} />
          <Button className='mt-5 rounded-full' onClick={addToCheckout}>Añadir al carrito</Button>
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
