'use client'

import { useGetProductBySlug } from "@/api/useGetProductBySlug"
import { ResponseType } from "@/types/response"
import { useParams } from "next/navigation"

const Page = () => {
  const params = useParams()
  const { productSlug } = params

  const { result }: ResponseType = useGetProductBySlug(productSlug)
  
  return (
    <div>page</div>
  )
}

export default Page
