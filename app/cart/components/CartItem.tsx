import ProductImageMiniature from '@/components/shared/ProductImageMiniature'
import ProductTasteOrigin from '@/components/shared/ProductTasteOrigin'
import { useCart } from '@/hooks/useCart'
import { formatPrice } from '@/lib/formatPrice'
import { cn } from '@/lib/utils'
import { ProductType } from '@/types/product'
import { X } from 'lucide-react'
import React from 'react'

interface CartItemProps {
  product: ProductType
}

const CartItem = ({ product }: CartItemProps) => {
  const { removeItem } = useCart()

  return (
    <li className='flex py-6 border-b'>
      <ProductImageMiniature slug={product.attributes.slug} url={product.attributes.images.data[0].attributes.url} />
      <div className='flex justify-between flex-1 px-6'>
        <div>
          <h2 className='text-lg font-bold'>{product.attributes.productName}</h2>
          <p>{formatPrice(product.attributes.price)}</p>
          <ProductTasteOrigin taste={product.attributes.taste} origin={product.attributes.origin} />
        </div>
        <div>
          <button
            className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition dark:text-black")}
          >
            <X size={20} onClick={() => removeItem(product.id)}/>
          </button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
