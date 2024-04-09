import { useEffect, useState } from "react"

export const useGetProductBySlug = (slug: string | string[]) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`
  const [result, setResult] = useState(null)
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
