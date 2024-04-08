'use client'

import Link from 'next/link'
import { useGetCategories } from '@/api/useGetCategories'
import { ResponseType } from '@/types/response'
import { CategoryType } from '@/types/category'

const ChooseCategory = () => {
  const { result, loading }: ResponseType = useGetCategories()

  return (
    <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
      <h3 className='px-6 pb-4 text-3xl sm:pb-8'>Elige tu categoría favorita</h3>
      <div className='grid gap-5 sm:grid-cols-3'>
        {
          (!loading && result !== undefined) && (
            result.map((category: CategoryType) => (
              <Link 
                key={category.id} 
                href={`/category/${category.attributes.slug}`} 
                className='relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg'
              >
                <img 
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.attributes.mainImage.data.attributes.url}`}
                  alt={category.attributes.categoryName}
                  className='max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110'
                />
              </Link>
            ))
          )
        }
      </div>
    </div>
  )
}

export default ChooseCategory