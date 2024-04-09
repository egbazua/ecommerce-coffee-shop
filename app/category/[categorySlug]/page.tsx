'use client'

import useGetCategoryProduct from '@/api/useGetCategoryProduct'
import { Separator } from '@/components/ui/separator'
import { ResponseType } from '@/types/response'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import FiltersControlsCategory from './components/FiltersControlsCategory'

const Page = () => {
  const router = useRouter()
  const params = useParams()
  const { categorySlug } = params

  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug)

  return (
    <div className='mas-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
      {
        (result !== null && !loading) && (
          <h1 className='text-3xl font-medium'>Café {result[0].attributes.category.data.attributes.categoryName}</h1>
        )
      }
      <Separator />
      <div className='sm:flex sm:justify-between'>
        <FiltersControlsCategory />
      </div>
    </div>
  )
}

export default Page
