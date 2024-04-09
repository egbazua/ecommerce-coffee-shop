import { ResultFilterTypes } from "@/types/filters"
import { useEffect, useState } from "react"

const useGetProductField = () => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/content-type-builder/content-types/api::product.product`
  const [result, setResult] = useState<ResultFilterTypes | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()

        setResult(json.data)
        setLoading(false)
      } catch (error: any) {
        setError(error)
        setLoading(false)

        console.error(error)
      }
    }

    )()
  }, [url])

  return { loading, result, error }
}

export default useGetProductField
