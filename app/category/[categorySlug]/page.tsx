'use client'

import useGetCategoryProduct from '@/api/useGetCategoryProduct'
import { Separator } from '@/components/ui/separator'
import { ResponseType } from '@/types/response'
import { useParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import FiltersControlsCategory from './components/FiltersControlsCategory'
import SkeletonSchema from '@/components/SkeletonSchema'
import ProductCard from './components/ProductCard'
import { ProductType } from '@/types/product'

const Page = () => {
  const router = useRouter()
  const params = useParams()
  const { categorySlug } = params
  const [filterOrigin, setFilterOrigin] = useState<string>('')
  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug)

  const filteredProducts = (result !== null && !loading) && (
    filterOrigin === '' ? result : result.filter((product: ProductType) => product.attributes.origin === filterOrigin)
  )

  return (
    <div className='mas-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
      {
        (result !== null && !loading) && (
          <h1 className='text-3xl font-medium'>Café {result[0].attributes.category.data.attributes.categoryName}</h1>
        )
      }
      <Separator />
      <div className='sm:flex sm:justify-between'>
        <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />
        <div className='grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10'>
          {
            loading && (
              <SkeletonSchema grid={3} />
            )
          }
          {
            (filteredProducts !== null && !loading) && (
              filteredProducts.map((product: ProductType) => (
                <ProductCard key={product.id} product={product} />
              ))
            )
          }
          {
            (filteredProducts !== null && !loading && filteredProducts.length === 0) && (
              <p>No hay productos con este filtro.</p>
            ) 
          }
        </div>
      </div>
    </div>
  )
}

export default Page
