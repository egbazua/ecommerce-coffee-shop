'use client'

import { useGetProductBySlug } from "@/api/useGetProductBySlug"
import { ResponseType } from "@/types/response"
import { useParams } from "next/navigation"
import SkeletonProduct from "./components/SkeletonProduct"
import CarouselProduct from "./components/CarouselProduct"

const Page = () => {
  const params = useParams()
  const { productSlug } = params

  const { result }: ResponseType = useGetProductBySlug(productSlug)
  
  if (result === null) return <SkeletonProduct />

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24">
      <div className="grid sm:grid-cols-2">
        <div>
          <CarouselProduct images={result[0].attributes.images} />
        </div>
        <div className="sm:px-12">
          <p>Info product</p>
        </div>
      </div>
    </div>
  )
}

export default Page
